package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.CreateLibraryDto;
import lt.edvinasstaupas.api.libraryapi.dto.library.LibraryDto;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.entity.Library;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LibraryMapper implements IMapper<Library, LibraryDto, CreateLibraryDto> {

    private final ModelMapper modelMapper;

    @Override
    public LibraryDto convertToDto(Library library) {
        return modelMapper.map(library, LibraryDto.class);
    }

    @Override
    public Library convertToDomain(LibraryDto libraryDto) {
        return modelMapper.map(libraryDto, Library.class);
    }

    @Override
    public Library convertToDomainFromCreate(CreateLibraryDto createLibraryDto) {
        return modelMapper.map(createLibraryDto, Library.class);
    }
}
