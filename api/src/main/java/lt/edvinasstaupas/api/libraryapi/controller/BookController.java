package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.book.CreateBookDto;
import lt.edvinasstaupas.api.libraryapi.dto.book.PaginatedListDto;
import lt.edvinasstaupas.api.libraryapi.dto.search.SearchDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.service.entity.BookService;
import lt.edvinasstaupas.api.libraryapi.service.entity.CopyService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("book")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    private final CopyService copyService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PaginatedListDto<BookDto>> getBooks(@RequestParam int page, @RequestParam int size) {
        return ok(new PaginatedListDto<>(bookService.getAllDtoPaginated(), createPageRequest(page, size)));
    }

    private Pageable createPageRequest(int page, int size) {
        return PageRequest.of(page, size);
    }

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> getBookById(@PathVariable Long id) {
        BookDto bookDto = bookService.getByIdDto(id);
        if (bookDto == null)
            return notFound().build();
        return ok(bookService.getByIdDto(id));
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> createBook(@RequestBody CreateBookDto createBookDto) {
        return ok(bookService.create(createBookDto));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookDto> putBook(@RequestBody BookDto bookDto) {
        bookService.update(bookDto);
        return ok(bookService.getByIdDto(bookDto.getId()));
    }

    @DeleteMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteBookById(@PathVariable Long id) {
        Book book = bookService.getById(id);
        if (book == null)
            return notFound().build();
        bookService.delete(book);
        return ok().build();
    }
/*
    @GetMapping(value = "{id}/copies", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CopyDto>> getCopiesByBook(@PathVariable Long id, @RequestBody PageableArguments pageableArguments) {
        return ok(copyService.getAllDtoByBook(bookService.getById(id), createPageRequest(pageableArguments)));
    }*/

    //TODO add pageable here
    @PostMapping(value = "find", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BookDto>> getBooksBySearch(@RequestBody SearchDto searchDto) {
        return ok(bookService.getAllDtoBySearch(searchDto));
    }
/*
    @GetMapping(value = "new", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BookDto>> getBooksNew(@RequestBody PageableArguments pageableArguments) {
        return ok(bookService.getAllDtoNew(createPageRequest(pageableArguments)));
    }*/

}
