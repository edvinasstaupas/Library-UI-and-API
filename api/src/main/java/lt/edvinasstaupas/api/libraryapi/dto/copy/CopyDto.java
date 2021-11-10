package lt.edvinasstaupas.api.libraryapi.dto.copy;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.LibraryDto;

import java.util.Date;

@Getter
@Setter
public class CopyDto {
    private Long id;

    private BookDto book;

    private LibraryDto library;

    private boolean isTaken = false;

    private Date takenAt;

    private Date dueAt;
}
