package lt.edvinasstaupas.api.libraryapi.config;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
//@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public abstract class SecurityConfig //extends WebSecurityConfigurerAdapter {
{
    /*private final UserDetailsService userDetailsService;

    private final PasswordEncoder passwordEncoder;

    private final LogoutSuccessHandler logoutSuccessHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/public/**", "/error", "/login", "/register", "/", "/post/**", "/logout").permitAll()
                .antMatchers("/private/**", "/create-post", "/edit-post", "/edit-comment", "/admin-panel", "/**").authenticated()
                .anyRequest()
                .authenticated()
                .and()
                //this should not be here because it creates a lot of vulnerabilities but i did not have time to fix it
                .csrf()
                .disable()
                //
                .formLogin()
                .permitAll()
                .loginPage("/login")
                .loginProcessingUrl("/login")
                .usernameParameter("username")
                .passwordParameter("password")
                .defaultSuccessUrl("/", true)
                .failureUrl("/login?error")
                .and()
                //logout
                .logout()
                .logoutUrl("/logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessHandler(logoutSuccessHandler)
                .logoutSuccessUrl("/");
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().requestMatchers(
                PathRequest.toStaticResources().atCommonLocations());
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder);
    }*/
}
