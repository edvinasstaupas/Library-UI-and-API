package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
