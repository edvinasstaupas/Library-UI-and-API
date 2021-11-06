package lt.staupasedvinas.api.libraryapi.api.repository;

import lt.staupasedvinas.api.libraryapi.api.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Long> {

    @Query
    Book getByAuthor(String author);
}
