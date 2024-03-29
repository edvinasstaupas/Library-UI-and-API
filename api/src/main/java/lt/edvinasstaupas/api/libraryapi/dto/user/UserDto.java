package lt.edvinasstaupas.api.libraryapi.dto.user;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Address;
import lt.edvinasstaupas.api.libraryapi.entity.Role;

import java.util.List;
import java.util.Set;

@Getter
@Setter
public class UserDto {

    private Long id;

    private String userNumber;

    private String firstName;

    private String lastName;

    private String avatarPath;

    private Address address;

    private List<CopyDto> copies;

    private Set<Role> roles;
}
