package lt.staupasedvinas.api.libraryapi.api.service;

import lt.staupasedvinas.api.libraryapi.api.entity.Book;
import lombok.RequiredArgsConstructor;
import lt.staupasedvinas.api.libraryapi.api.repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public Book getBook() {
        return Book.builder()
                .id(1L)
                .author("Autorius")
                .title("Titlas")
                .build();
    }
}
