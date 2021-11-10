package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.library.CreateLibraryDto;
import lt.edvinasstaupas.api.libraryapi.entity.Library;
import lt.edvinasstaupas.api.libraryapi.repository.LibraryRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.LibraryMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LibraryService implements IEntityService<Library> {

    private final LibraryRepository libraryRepository;

    private final LibraryMapper libraryMapper;

    @Override
    public void save(Library library) {
        libraryRepository.save(library);
    }

    public Library create(CreateLibraryDto createLibraryDto) {
        Library library = libraryMapper.convertToDomainFromCreate(createLibraryDto);
        save(library);
        return libraryMapper.convertToDto(library);
    }

    @Override
    public void delete(Library library) {
        libraryRepository.delete(library);
    }

    @Override
    public Library getById(Long id) {
        return libraryRepository.findById(id).orElse(null);
    }


    public List<Library> getAll() {
        return libraryRepository.findAll();
    }

    public void update(Library library) {
        save(library);
    }
}
