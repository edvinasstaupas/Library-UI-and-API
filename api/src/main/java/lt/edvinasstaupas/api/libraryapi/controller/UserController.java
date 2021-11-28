package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.user.CreateUserDto;
import lt.edvinasstaupas.api.libraryapi.dto.user.UserDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import lt.edvinasstaupas.api.libraryapi.service.entity.CopyService;
import lt.edvinasstaupas.api.libraryapi.service.entity.UserService;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    private final CopyService copyService;

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
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) { //TODO fix empty ResponseEntity
        User user = userService.getById(id);
        if (user == null)
            return notFound().build();
        userService.delete(user);
        return ok().build();
    }

    @PostMapping("{id}/avatar")
    public ResponseEntity<UserDto> uploadAvatar(@PathVariable Long id, @RequestParam MultipartFile avatar) {
        return ok(userService.uploadAvatar(id, avatar));
    }

    @GetMapping("{id}/avatar")
    public ResponseEntity<Resource> downloadAvatar(@PathVariable Long id) {
        return userService.getAvatarById(id);
    }

    @PreAuthorize("hasRole('MEMBER')")
    @GetMapping(value = "copies", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CopyDto>> getUserBooks(Principal principal) {
        return ok(copyService.getBooksByUserId(userService.getByUserNumber(principal.getName())));
    }
}
