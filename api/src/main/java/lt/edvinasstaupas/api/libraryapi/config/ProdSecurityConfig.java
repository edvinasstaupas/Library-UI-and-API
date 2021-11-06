package lt.edvinasstaupas.api.libraryapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("prod")
public class ProdSecurityConfig //extends SecurityConfig {
{    /*public ProdSecurityConfig(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder, LogoutSuccessHandler logoutSuccessHandler) {
        super(userDetailsService, passwordEncoder, logoutSuccessHandler);
    }*/

}
