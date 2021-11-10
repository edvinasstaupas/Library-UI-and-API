package lt.edvinasstaupas.api.libraryapi.dto.library;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.entity.Address;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;

import java.util.List;

@Getter
@Setter
public class CreateLibraryDto {

    private String name;

    private Address address;

    private List<Copy> copies;
}