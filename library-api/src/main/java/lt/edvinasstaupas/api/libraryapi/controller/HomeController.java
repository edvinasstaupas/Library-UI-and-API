package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.service.BookService;
import lt.edvinasstaupas.api.libraryapi.service.HomeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final HomeService homeService;

    private final BookService bookService;

    @GetMapping
    public Book getHomePage() {
        return bookService.getBook();
    }
}
