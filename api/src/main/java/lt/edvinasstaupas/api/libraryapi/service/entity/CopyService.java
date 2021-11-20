package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchCopyException;
import lt.edvinasstaupas.api.libraryapi.repository.CopyRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.CopyMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CopyService implements IEntityService<Copy, CopyDto, CreateCopyDto> {

    private final CopyRepository copyRepository;

    private final CopyMapper copyMapper;

    @Override
    public void save(Copy copy) {
        copyRepository.save(copy);
    }

    @Override
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
        return copyRepository.findById(id).orElseThrow(() -> new NoSuchCopyException(id));
    }

    @Override
    public CopyDto getByIdDto(Long id) {
        return copyMapper.convertToDto(getById(id));
    }

    @Override
    public List<CopyDto> getAllDto() {
        return copyRepository.findAll()
                .stream()
                .map(copyMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void update(CopyDto copyDto) {
        save(copyMapper.convertToDomain(copyDto));
    }

    public List<CopyDto> getBooksByUserId(User user) {
        return copyRepository.findAllByTakenBy(user).stream().map(copyMapper::convertToDto).collect(Collectors.toList());
    }
}
