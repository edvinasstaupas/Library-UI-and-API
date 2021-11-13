package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.library.CreateLibraryDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.LibraryDto;
import lt.edvinasstaupas.api.libraryapi.entity.Library;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchLibraryException;
import lt.edvinasstaupas.api.libraryapi.repository.LibraryRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.LibraryMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LibraryService implements IEntityService<Library, LibraryDto, CreateLibraryDto> {

    private final LibraryRepository libraryRepository;

    private final LibraryMapper libraryMapper;

    @Override
    public void save(Library library) {
        libraryRepository.save(library);
    }

    @Override
    public LibraryDto create(CreateLibraryDto createLibraryDto) {
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
        return libraryRepository.findById(id).orElseThrow(() -> new NoSuchLibraryException(id));
    }

    @Override
    public List<LibraryDto> getAllDto() {
        return libraryRepository.findAll()
                .stream()
                .map(libraryMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void update(LibraryDto libraryDto) {
        save(libraryMapper.convertToDomain(libraryDto));
    }

    @Override
    public LibraryDto getByIdDto(Long id) {
        return libraryMapper.convertToDto(getById(id));
    }
}
