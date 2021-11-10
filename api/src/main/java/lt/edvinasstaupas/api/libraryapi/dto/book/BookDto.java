package lt.edvinasstaupas.api.libraryapi.dto.book;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.dto.author.AuthorDto;

import java.util.Date;

@Getter
@Setter
public class BookDto {
    private Long id;

    private String isbn;

    private AuthorDto author;

    private String title;

    private Date publishedAt;
}
