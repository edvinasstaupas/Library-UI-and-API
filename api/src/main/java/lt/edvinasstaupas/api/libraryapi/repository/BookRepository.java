package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> getAllByTitle(String title);

    @Query("SELECT b from Book b where b.author.name = :author")
    List<Book> getAllByAuthor(String author);

    List<Book> getAllByPublishedAtAfter(Date date);
}
