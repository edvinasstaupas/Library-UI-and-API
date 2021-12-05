package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.book.BookDto;
import lt.edvinasstaupas.api.libraryapi.dto.book.CreateBookDto;
import lt.edvinasstaupas.api.libraryapi.dto.search.SearchDto;
import lt.edvinasstaupas.api.libraryapi.entity.Author;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchBookException;
import lt.edvinasstaupas.api.libraryapi.repository.BookRepository;
import lt.edvinasstaupas.api.libraryapi.service.date.DateService;
import lt.edvinasstaupas.api.libraryapi.service.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class BookService implements IEntityService<Book, BookDto, CreateBookDto> {

    private final BookRepository bookRepository;

    private final BookMapper bookMapper;

    private final AuthorService authorService;

    @Value("${book.new-additional-time}")
    private Long newBookDateInDays;

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

    public List<BookDto> getAllDtoPaginated(Pageable pageRequest) {
        return bookRepository.findAll(pageRequest).stream()
                .map(bookMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void update(BookDto bookDto) {
        save(bookMapper.convertToDomain(bookDto));
    }

    public List<BookDto> getAllDtoBySearch(SearchDto searchDto) {
        List<Book> booksByTitle;
        List<Book> booksByAuthor;

        if (!searchDto.getTitle().equals("") && !searchDto.getAuthor().equals("")) {
            booksByAuthor = getAllByAuthor(searchDto.getAuthor());
            booksByTitle = getAllByTitleContainingIgnoreCase(searchDto.getTitle());

            return bookMapper.mapList(booksByTitle.stream()
                    .filter(new HashSet<>(booksByAuthor)::contains)
                    .collect(Collectors.toList()));

        } else if (!searchDto.getAuthor().equals("")) {
            return bookMapper.mapList
                    (authorService.getAllByName(searchDto.getAuthor())
                            .stream()
                            .flatMap(author -> getByAuthor(author)
                                    .stream())
                            .collect(Collectors.toList()));
        } else if (!searchDto.getTitle().equals("")) {
            return bookMapper.mapList(getAllByTitleContainingIgnoreCase(searchDto.getTitle()));
        }

        return new ArrayList<>();
    }

    private List<Book> getAllByAuthor(String authorName) {
        return authorService.getAllByName(authorName)
                .stream()
                .flatMap(a -> getByAuthor(a)
                        .stream())
                .collect(Collectors.toList());
    }

    public List<Book> getAllByTitleContainingIgnoreCase(String title) {
        return bookRepository.getAllByTitleContainingIgnoreCase(title);
    }

    private List<Book> getByAuthor(Author author) {
        return bookRepository.getAllByAuthor(author);
    }

    public List<BookDto> getAllDtoNew(Pageable pageable) {
        return bookRepository.getAllByPublishedAtAfter(DateService.getDateWithDeductedDays(newBookDateInDays), pageable)
                .stream()
                .map(bookMapper::convertToDto)
                .collect(Collectors.toList());
    }
}
