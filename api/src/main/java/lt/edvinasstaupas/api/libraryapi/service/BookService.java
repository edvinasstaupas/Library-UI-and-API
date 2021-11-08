package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.exception.NoSuchEntityException;
import lt.edvinasstaupas.api.libraryapi.repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService implements IEntityService<Book> {

    private final BookRepository bookRepository;

    @Override
    public void save(Book book) {

    }

    @Override
    public void delete(Book book) {

    }

    @Override
    public Book findById(Long id) throws NoSuchEntityException {
        return null;
    }
}
