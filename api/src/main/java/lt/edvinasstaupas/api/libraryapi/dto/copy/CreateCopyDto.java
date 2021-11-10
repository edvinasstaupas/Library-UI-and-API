package lt.edvinasstaupas.api.libraryapi.dto.copy;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.entity.Library;

@Getter
@Setter
public class CreateCopyDto {

    private Book book;

    private Library library;
}
