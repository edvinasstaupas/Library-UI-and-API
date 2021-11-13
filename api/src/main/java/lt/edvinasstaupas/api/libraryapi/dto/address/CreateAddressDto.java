package lt.edvinasstaupas.api.libraryapi.dto.address;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAddressDto {

    private String street;

    private String houseNumber;

    private String city;
}