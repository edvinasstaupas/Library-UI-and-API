package lt.edvinasstaupas.api.libraryapi.security.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
