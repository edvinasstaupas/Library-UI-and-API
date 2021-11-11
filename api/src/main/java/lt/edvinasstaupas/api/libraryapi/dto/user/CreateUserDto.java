package lt.edvinasstaupas.api.libraryapi.dto.user;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.entity.Address;

@Getter
@Setter
public class CreateUserDto {

    private String firstName;

    private String lastName;

    private String password;

    private Address address;
}
