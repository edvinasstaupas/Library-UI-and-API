package lt.edvinasstaupas.api.libraryapi.security.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import lt.edvinasstaupas.api.libraryapi.entity.Role;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.crypto.SecretKey;
import java.util.Date;
import java.util.List;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toSet;

@Component
public class JwtTokenProvider {

    @Value("#{${security.jwt.validity-time} * 60 * 1000}")
    private Long tokenValidityInMillis;

    private SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS512;
    private SecretKey secretKey;

    @PostConstruct
    protected void init() {
        secretKey = Keys.secretKeyFor(signatureAlgorithm);
    }

    public String createToken(User user) {
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setIssuer("eshop-api")
                .setAudience("eshop-ui")
                .setSubject(user.getUsername())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + tokenValidityInMillis))
                .claim("roles", user.getRoles().stream()
                        .map(Role::getAuthority)
                        .collect(toSet()))
                .signWith(secretKey)
                .compact();
    }

    public Authentication parseToken(String jwt) {
        Claims parsedJwtBody = Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(jwt)
                .getBody();

        String username = parsedJwtBody.getSubject();
        List<GrantedAuthority> roles = ((List<String>) parsedJwtBody.get("roles")).stream()
                .map(SimpleGrantedAuthority::new)
                .collect(toList());

        return new UsernamePasswordAuthenticationToken(username, null, roles);
    }
}
