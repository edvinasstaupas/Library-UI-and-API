package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.BookDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BookMapper implements IMapper<Book, BookDto> {

    private final ModelMapper modelMapper;

    @Override
    public BookDto convertToDto(Book book) {
        return modelMapper.map(book, BookDto.class);
    }

    @Override
    public Book convertToDomain(BookDto bookDto) {
        return modelMapper.map(bookDto, Book.class);
    }
}
