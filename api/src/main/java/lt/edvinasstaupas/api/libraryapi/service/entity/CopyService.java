package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchCopyException;
import lt.edvinasstaupas.api.libraryapi.repository.CopyRepository;
import lt.edvinasstaupas.api.libraryapi.service.date.DateService;
import lt.edvinasstaupas.api.libraryapi.service.entity.user.UserService;
import lt.edvinasstaupas.api.libraryapi.service.mapper.CopyMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CopyService implements IEntityService<Copy, CopyDto, CreateCopyDto> {

    private final CopyRepository copyRepository;

    private final CopyMapper copyMapper;

    private final UserService userService;

    @Value("${copy.return-time}")
    private Long dateToReturnBookInDays;

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
        return copyMapper.mapList(copyRepository.findAll());
    }

    @Override
    public void update(CopyDto copyDto) {
        save(copyMapper.convertToDomain(copyDto));
    }

    public void updateDomain(Copy copy) {
        save(copy);
    }

    public List<CopyDto> getBooksByUserId(User user) {
        return copyMapper.mapList(copyRepository.findAllByTakenBy(user));
    }

    public List<CopyDto> getAllDtoByBook(Book book, Pageable pageable) {
        return copyMapper.mapList(copyRepository.findAllByBook(book, pageable));
    }

    public CopyDto reserveCopy(CopyDto copyDto, Principal principal) {
        Copy copy = getById(copyDto.getId());
        copy.setReserved(true);
        copy.setTakenBy(userService.getByUserNumber(principal.getName()));
        updateDomain(copy);
        return copyMapper.convertToDto(copy);
    }

    public CopyDto takeCopy(CopyDto copyDto) {
        Copy copy = getById(copyDto.getId());
        copy.setTaken(true);
        copy.setTakenAt(DateService.getCurrentDate());
        copy.setDueAt(DateService.getDateWithAdditionalDays(dateToReturnBookInDays));
        updateDomain(copy);
        return copyMapper.convertToDto(copy);
    }

    public List<CopyDto> getAllDtoByUser(User user) {
        return copyMapper.mapList(copyRepository.findAllByTakenBy(user));
    }

    public CopyDto returnCopy(CopyDto copyDto) {
        Copy copy = getById(copyDto.getId());
        copy.setTaken(false);
        copy.setReserved(false);
        copy.setTakenAt(null);
        copy.setDueAt(null);
        copy.setTakenBy(null);
        updateDomain(copy);
        return copyMapper.convertToDto(copy);
    }
}
