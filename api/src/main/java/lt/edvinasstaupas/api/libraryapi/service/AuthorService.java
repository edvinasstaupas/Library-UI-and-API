package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.AuthorDto;
import lt.edvinasstaupas.api.libraryapi.dto.CreateAuthorDto;
import lt.edvinasstaupas.api.libraryapi.entity.Author;
import lt.edvinasstaupas.api.libraryapi.repository.AuthorRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.AuthorMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthorService implements IEntityService<Author> {

    private final AuthorRepository authorRepository;

    private final AuthorMapper authorMapper;

    @Override
    public void save(Author author) {
        authorRepository.save(author);
    }

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
        return authorRepository.findById(id).orElse(null);
    }

    public AuthorDto getByIdDto(Long id) {
        Optional<Author> AuthorOptional = authorRepository.findById(id);
        return AuthorOptional.map(authorMapper::convertToDto).orElse(null);
    }

    public List<AuthorDto> getAllDto() {
        return authorRepository.findAll().stream()
                .map(authorMapper::convertToDto)
                .collect(Collectors.toList());
    }

    public void update(AuthorDto authorDto) {
        save(authorMapper.convertToDomain(authorDto));
    }
}
