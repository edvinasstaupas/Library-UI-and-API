package lt.edvinasstaupas.api.libraryapi.dto.author;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAuthorDto {

    private String isbn;

    private String name;
}
