package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryRepository extends JpaRepository<Library, Long> {
}
