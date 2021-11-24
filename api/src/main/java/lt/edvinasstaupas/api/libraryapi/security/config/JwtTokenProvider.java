package lt.edvinasstaupas.api.libraryapi.security.config;

import lt.edvinasstaupas.api.libraryapi.entity.User;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenProvider {

    public String createToken(User user) {
        return "TOKEN";
    }
}
