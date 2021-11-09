package lt.edvinasstaupas.api.libraryapi.dto;

import lombok.Getter;
import lombok.Setter;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class CreateBookDto {

    private String isbn;

    private AuthorDto author;

    private String title;

    private List<Copy> copies;

    private Date publishedAt;
}
