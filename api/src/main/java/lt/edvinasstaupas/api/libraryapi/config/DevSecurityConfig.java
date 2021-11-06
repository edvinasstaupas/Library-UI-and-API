package lt.edvinasstaupas.api.libraryapi.config;


import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("dev")
public class DevSecurityConfig //extends SecurityConfig {
    {
    /*public DevSecurityConfig(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder, LogoutSuccessHandler logoutSuccessHandler) {
        super(userDetailsService, passwordEncoder, logoutSuccessHandler);
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().requestMatchers(
                PathRequest.toStaticResources().atCommonLocations(),
                PathRequest.toH2Console());
    }*/
}

