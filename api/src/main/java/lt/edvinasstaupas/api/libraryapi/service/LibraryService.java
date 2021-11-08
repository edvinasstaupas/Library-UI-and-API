package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Library;
import lt.edvinasstaupas.api.libraryapi.exception.NoSuchEntityException;
import lt.edvinasstaupas.api.libraryapi.repository.LibraryRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LibraryService implements IEntityService<Library> {

    private final LibraryRepository libraryRepository;

    @Override
    public void save(Library library) {

    }

    @Override
    public void delete(Library library) {

    }

    @Override
    public Library getById(Long id) {
        return null;
    }
}
