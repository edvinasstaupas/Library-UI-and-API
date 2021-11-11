package lt.edvinasstaupas.api.libraryapi.repository;

import lt.edvinasstaupas.api.libraryapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User, Long> {
    //@Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.userNumber = :userNumber")
    //UserDetails loadByUserNumber(String userNumber);

    @Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.userNumber = :userNumber")
    User findByUserNumber(String userNumber);
}
