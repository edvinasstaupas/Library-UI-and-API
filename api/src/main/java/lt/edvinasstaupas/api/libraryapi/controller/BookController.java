package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.CreateBookDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.service.BookService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.*;

@RestController
@RequestMapping("book")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BookDto>> getBooks() {
        return ok(bookService.getAllDto());
    }

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> getBookById(@PathVariable Long id) {
        BookDto bookDto = bookService.getByIdDto(id);
        if (bookDto == null)
            return notFound().build();
        return ok(bookService.getByIdDto(id));
    }

    @PostMapping(value = "create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> createBook(@RequestBody CreateBookDto createBookDto) {
        return ok(bookService.create(createBookDto));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> putBookById(@RequestBody BookDto bookDto) {
        bookService.update(bookDto);
        return ok(bookService.getByIdDto(bookDto.getId()));
    }

    @DeleteMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteBookById(@PathVariable Long id) {
        Book book = bookService.getById(id);
        if (book == null)
            return notFound().build();
        bookService.delete(book);
        return ok().build();
    }

}
