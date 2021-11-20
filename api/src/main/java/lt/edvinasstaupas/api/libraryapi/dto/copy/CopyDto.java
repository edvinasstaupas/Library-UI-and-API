package lt.edvinasstaupas.api.libraryapi.dto.copy;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.LibraryCopyDto;

import java.util.Date;

@Getter
@Setter
@ToString
public class CopyDto {
    private Long id;

    private BookDto book;

    private LibraryCopyDto library;

    private boolean isTaken = false;

    private Date takenAt;

    private Date dueAt;
}
