package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.Author;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> getAllByTitleContainingIgnoreCase(String title);

    List<Book> getAllByAuthor(Author author);

    List<Book> getAllByPublishedAtAfter(Date date);
}
