package lt.edvinasstaupas.api.libraryapi.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthorDto {
    private Long id;

    private String isbn;

    private String firstName;

    private String lastName;
}
