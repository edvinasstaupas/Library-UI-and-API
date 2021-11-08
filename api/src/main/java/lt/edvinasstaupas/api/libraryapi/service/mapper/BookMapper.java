package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.BookDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookMapper {
    private final ModelMapper modelMapper;


    public BookDto convertToDto (Book book) {
        return modelMapper.map(book, BookDto.class);
    }

    public Book convertToDomain (BookDto bookDto) {
        return modelMapper.map(bookDto, Book.class);
    }
}
