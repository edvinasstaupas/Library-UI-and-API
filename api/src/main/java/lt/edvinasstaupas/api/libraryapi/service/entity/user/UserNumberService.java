package lt.edvinasstaupas.api.libraryapi.service.entity.user;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserNumberService {

    private final UserRepository userRepository;

    public String getUserNumber() {
        return "" + (userRepository.getBiggestUserNumber() + 1);
    }
}
