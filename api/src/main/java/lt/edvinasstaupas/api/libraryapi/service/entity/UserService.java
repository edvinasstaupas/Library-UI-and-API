package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import lt.edvinasstaupas.api.libraryapi.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements IEntityService<User> {

    private final UserRepository userRepository;

    @Override
    public void save(User user) {

    }

    @Override
    public void delete(User user) {

    }

    @Override
    public User getById(Long id) {
        return null;
    }
}
