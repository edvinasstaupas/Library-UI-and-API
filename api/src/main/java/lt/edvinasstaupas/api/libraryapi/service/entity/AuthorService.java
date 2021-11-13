package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.author.AuthorDto;
import lt.edvinasstaupas.api.libraryapi.dto.author.CreateAuthorDto;
import lt.edvinasstaupas.api.libraryapi.entity.Author;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchAuthorException;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchUserException;
import lt.edvinasstaupas.api.libraryapi.repository.AuthorRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.AuthorMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthorService implements IEntityService<Author, AuthorDto, CreateAuthorDto> {

    private final AuthorRepository authorRepository;

    private final AuthorMapper authorMapper;

    @Override
    public void save(Author author) {
        authorRepository.save(author);
    }

    @Override
    public AuthorDto create(CreateAuthorDto createAuthorDto) {
        Author author = authorMapper.convertToDomainFromCreate(createAuthorDto);
        save(author);
        return authorMapper.convertToDto(author);
    }

    @Override
    public void delete(Author author) {
        authorRepository.delete(author);
    }

    @Override
    public Author getById(Long id) {
        return authorRepository.findById(id).orElseThrow(() -> new NoSuchAuthorException(id));
    }

    @Override
    public AuthorDto getByIdDto(Long id) {
        return authorMapper.convertToDto(getById(id));
    }

    @Override
    public List<AuthorDto> getAllDto() {
        return authorRepository.findAll().stream()
                .map(authorMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void update(AuthorDto authorDto) {
        save(authorMapper.convertToDomain(authorDto));
    }
}
