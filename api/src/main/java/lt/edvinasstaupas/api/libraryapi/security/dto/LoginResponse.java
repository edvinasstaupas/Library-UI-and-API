package lt.edvinasstaupas.api.libraryapi.security.dto;

import lombok.Getter;
import lt.edvinasstaupas.api.libraryapi.entity.Role;
import lt.edvinasstaupas.api.libraryapi.entity.User;

import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class LoginResponse {
    private final String username;
    private final Set<String> roles;
    private final String fullUserName;

    public LoginResponse(User user) {
        this.username = user.getUsername();
        this.roles = user.getRoles().stream()
                .map(Role::getAuthority)
                .collect(Collectors.toSet());
        this.fullUserName = user.getFirstName() + " " + user.getLastName();
    }
}
