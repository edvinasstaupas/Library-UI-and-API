package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CopyMapper implements IMapper<Copy, CopyDto, CreateCopyDto> {

    private final ModelMapper modelMapper;

    @Override
    public CopyDto convertToDto(Copy copy) {
        return modelMapper.map(copy, CopyDto.class);
    }

    @Override
    public Copy convertToDomain(CopyDto copyDto) {
        return modelMapper.map(copyDto, Copy.class);
    }

    @Override
    public Copy convertToDomainFromCreate(CreateCopyDto createCopyDto) {
        return modelMapper.map(createCopyDto, Copy.class);
    }
}
