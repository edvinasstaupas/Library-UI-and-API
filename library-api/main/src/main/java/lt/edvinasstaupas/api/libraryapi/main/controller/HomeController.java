package lt.edvinasstaupas.api.libraryapi.main.controller;

import lt.staupasedvinas.api.libraryapi.api.entity.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import lt.staupasedvinas.api.libraryapi.api.service.BookService;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final BookService bookService;

    @GetMapping("")
    public Book getHomePage() {
        return bookService.getBook();
    }

    @GetMapping("book")
    public Book getBookPage() {
        return bookService.getBook();
    }
}
