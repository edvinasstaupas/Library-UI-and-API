package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.CreateLibraryDto;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.entity.Library;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LibraryMapper implements IMapper<Library, Library, CreateLibraryDto> {

    private final ModelMapper modelMapper;

    @Override
    public Library convertToDto(Library library) {
        return null;
    }

    @Override
    public Library convertToDomain(Library library) {
        return null;
    }

    @Override
    public Library convertToDomainFromCreate(CreateLibraryDto createLibraryDto) {
        return modelMapper.map(createLibraryDto, Library.class);
    }
}
