package lt.edvinasstaupas.api.libraryapi.dto.address;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressDto {

    private Long id;

    private String street;

    private String houseNumber;

    private String city;
}
