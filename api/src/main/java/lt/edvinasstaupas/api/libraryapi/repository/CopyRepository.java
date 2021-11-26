package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CopyRepository extends JpaRepository<Copy, Long> {
    List<Copy> findAllByTakenBy(User user);

    List<Copy> findAllByBook(Book book);
}
