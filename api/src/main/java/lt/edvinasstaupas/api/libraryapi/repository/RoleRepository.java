package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
