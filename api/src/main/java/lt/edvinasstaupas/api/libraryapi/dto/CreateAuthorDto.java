package lt.edvinasstaupas.api.libraryapi.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAuthorDto {

    private String isbn;

    private String firstName;

    private String lastName;
}
