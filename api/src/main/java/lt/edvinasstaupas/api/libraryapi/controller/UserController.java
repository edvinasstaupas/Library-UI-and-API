package lt.edvinasstaupas.api.userapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.user.CreateUserDto;
import lt.edvinasstaupas.api.libraryapi.dto.user.UserDto;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import lt.edvinasstaupas.api.libraryapi.service.entity.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserDto>> getCopies() {
        return ok(userService.getAllDto());
    }

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        User user = userService.getById(id);
        if (user == null)
            return notFound().build();
        return ok(userService.getByIdDto(id));
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> createUser(@RequestBody CreateUserDto createUserDto) {
        return ok(userService.create(createUserDto));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> putUser(@RequestBody UserDto userDto) {
        userService.update(userDto);
        return ok(userDto);
    }

    @DeleteMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteUserById(@PathVariable Long id) { //TODO fix empty ResponseEntity
        User user = userService.getById(id);
        if (user == null)
            return notFound().build();
        userService.delete(user);
        return ok().build();
    }
}
