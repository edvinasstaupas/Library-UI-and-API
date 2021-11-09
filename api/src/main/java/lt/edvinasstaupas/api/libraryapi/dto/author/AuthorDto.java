package lt.edvinasstaupas.api.libraryapi.dto.author;

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
