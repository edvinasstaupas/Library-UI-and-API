package lt.edvinasstaupas.api.libraryapi.dto.copy;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.LibraryDto;

@Getter
@Setter
public class CreateCopyDto {

    private BookDto book;

    private LibraryDto library;
}
