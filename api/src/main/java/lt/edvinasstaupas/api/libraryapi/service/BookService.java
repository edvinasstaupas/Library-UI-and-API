package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {

    //private final BookRepository bookRepository;

    public Book getBook() {
        return Book.builder()
                .id(1L)
                .author("Autorius")
                .title("Titlas")
                .build();
    }
}
