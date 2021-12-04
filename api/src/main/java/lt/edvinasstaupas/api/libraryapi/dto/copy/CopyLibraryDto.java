package lt.edvinasstaupas.api.libraryapi.dto.copy;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;

import java.util.Date;

@Getter
@Setter
public class CopyLibraryDto {

    private Long id;

    private BookDto book;

    private boolean isTaken = false;

    private boolean isReserved = false;

    private Date takenAt;

    private Date dueAt;
}
