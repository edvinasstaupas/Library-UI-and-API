package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.book.CreateBookDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.repository.BookRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.BookMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService implements IEntityService<Book> {

    private final BookRepository bookRepository;

    private final BookMapper bookMapper;

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    public BookDto create(CreateBookDto createBookDto) {
        Book book = bookMapper.convertToDomainFromCreate(createBookDto);
        save(book);
        return bookMapper.convertToDto(book);
    }

    @Override
    public void delete(Book book) {
        bookRepository.delete(book);
    }

    @Override
    public Book getById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public BookDto getByIdDto(Long id) {
        Optional<Book> bookOptional = bookRepository.findById(id);
        return bookOptional.map(bookMapper::convertToDto).orElse(null);
    }

    public List<BookDto> getAllDto() {
        return bookRepository.findAll().stream()
                .map(bookMapper::convertToDto)
                .collect(Collectors.toList());
    }

    public void update(BookDto bookDto) {
        save(bookMapper.convertToDomain(bookDto));
    }
}
