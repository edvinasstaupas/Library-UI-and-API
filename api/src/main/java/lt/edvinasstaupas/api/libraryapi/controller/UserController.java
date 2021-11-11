package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.user.UserDto;
import lt.edvinasstaupas.api.libraryapi.service.entity.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    @GetMapping("/{userNumber}")
    public UserDto getByUserNumber(@PathVariable String userNumber) {
        return userService.getByUserNumber(userNumber);
    }
}
