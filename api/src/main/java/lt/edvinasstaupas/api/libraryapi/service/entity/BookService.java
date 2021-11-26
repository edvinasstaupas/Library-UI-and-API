package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.book.CreateBookDto;
import lt.edvinasstaupas.api.libraryapi.dto.search.SearchDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchBookException;
import lt.edvinasstaupas.api.libraryapi.repository.BookRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.BookMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class BookService implements IEntityService<Book, BookDto, CreateBookDto> {

    private final BookRepository bookRepository;

    private final BookMapper bookMapper;

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    @Override
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
        return bookRepository.findById(id).orElseThrow(() -> new NoSuchBookException(id));
    }

    @Override
    public BookDto getByIdDto(Long id) {
        return bookMapper.convertToDto(getById(id));
    }

    @Override
    public List<BookDto> getAllDto() {
        return bookRepository.findAll().stream()
                .map(bookMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void update(BookDto bookDto) {
        save(bookMapper.convertToDomain(bookDto));
    }

    public List<BookDto> getAllDtoBySearch(SearchDto searchDto) {
        List<Book> booksByTitle = bookRepository.getAllByTitle(searchDto.getTitle());
        List<Book> booksByAuthor = bookRepository.getAllByAuthor(searchDto.getAuthor());
        return Stream.concat(booksByAuthor.stream(), booksByTitle.stream())
                .distinct()
                .map(bookMapper::convertToDto)
                .collect(Collectors.toList());
    }
}
