package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.repository.CopyRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.CopyMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CopyService implements IEntityService<Copy> {

    private final CopyRepository copyRepository;

    private final CopyMapper copyMapper;

    @Override
    public void save(Copy copy) {
        copyRepository.save(copy);
    }

    public CopyDto create(CreateCopyDto createCopyDto) {
        Copy copy = copyMapper.convertToDomainFromCreate(createCopyDto);
        save(copy);
        return copyMapper.convertToDto(copy);
    }

    @Override
    public void delete(Copy copy) {
        copyRepository.delete(copy);
    }

    @Override
    public Copy getById(Long id) {
        return copyRepository.findById(id).orElse(null);
    }

    public CopyDto getByIdDto(Long id) {
        Optional<Copy> copyOptional = copyRepository.findById(id);
        return copyOptional.map(copyMapper::convertToDto).orElse(null);
    }

    public List<CopyDto> getAll() {
        return copyRepository.findAll()
                .stream()
                .map(copyMapper::convertToDto)
                .collect(Collectors.toList());
    }

    public void update(CopyDto copyDto) {
        save(copyMapper.convertToDomain(copyDto));
    }
}
