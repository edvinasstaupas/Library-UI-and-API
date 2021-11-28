package lt.edvinasstaupas.api.libraryapi.dto.user;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.dto.address.CreateAddressDto;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class CreateUserDto {

    private String firstName;

    private String lastName;

    private String password;

    private String password2;

    private CreateAddressDto address;

    private MultipartFile avatar;
}
