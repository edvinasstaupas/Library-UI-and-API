package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CopyRepository extends JpaRepository<Copy, Long> {
}
