package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Author;
import lt.edvinasstaupas.api.libraryapi.repository.AuthorRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthorService implements IEntityService<Author> {

    private final AuthorRepository authorRepository;

    @Override
    public void save(Author author) {

    }

    @Override
    public void delete(Author author) {

    }

    @Override
    public Author getById(Long id) {
        return null;
    }
}
