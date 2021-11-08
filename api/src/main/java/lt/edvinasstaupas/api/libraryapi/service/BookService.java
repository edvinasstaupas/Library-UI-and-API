package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.BookDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.repository.BookRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.AuthorMapper;
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

    private final AuthorMapper authorMapper;

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void delete(Book book) {
        bookRepository.delete(book);
    }

    @Override
    public Book getById(Long id) {
        return bookRepository.getById(id);
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
        save(Book.builder()
                .id(bookDto.getId())
                .author(authorMapper.convertToDomain(bookDto.getAuthor()))
                .isbn(bookDto.getIsbn())
                .publishedAt(bookDto.getPublishedAt())
                .copies(bookDto.getCopies())
                .title(bookDto.getTitle())
                .build());
    }
}
