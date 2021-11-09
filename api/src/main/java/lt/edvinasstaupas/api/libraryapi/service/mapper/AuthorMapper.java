package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.AuthorDto;
import lt.edvinasstaupas.api.libraryapi.entity.Author;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthorMapper implements IMapper<Author, AuthorDto> {

    private final ModelMapper modelMapper;

    public AuthorDto convertToDto(Author author) {
        return modelMapper.map(author, AuthorDto.class);
    }

    public Author convertToDomain(AuthorDto authorDto) {
        return modelMapper.map(authorDto, Author.class);
    }
}
