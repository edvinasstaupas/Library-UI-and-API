package lt.edvinasstaupas.api.libraryapi.dto.library;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.entity.Address;

@Getter
@Setter
public class LibraryCopyDto {
    private Long id;

    private String name;

    private Address address;
}
