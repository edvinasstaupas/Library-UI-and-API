package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.service.entity.CopyService;
import lt.edvinasstaupas.api.libraryapi.service.entity.user.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("copy")
@RequiredArgsConstructor
public class CopyController {

    private final CopyService copyService;

    private final UserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CopyDto>> getCopies() {
        return ok(copyService.getAllDto());
    }

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> getCopyById(@PathVariable Long id) {
        CopyDto copyDto = copyService.getByIdDto(id);
        if (copyDto == null)
            return notFound().build();
        return ok(copyDto);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> createCopy(@RequestBody CreateCopyDto createCopy) {
        return ok(copyService.create(createCopy));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> putCopy(@RequestBody CopyDto copyDto) {
        copyService.update(copyDto);
        return ok(copyDto);
    }

    @DeleteMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteCopyById(@PathVariable Long id) {
        Copy copy = copyService.getById(id);
        if (copy == null)
            return notFound().build();
        copyService.delete(copy);
        return ok().build();
    }

    @PreAuthorize("hasRole('MEMBER')")
    @PostMapping(value = "reserve", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> reserveCopy(@RequestBody CopyDto copyDto, Principal principal) {
        return ok(copyService.reserveCopy(copyDto, principal));
    }

    @PreAuthorize("hasRole('LIBRARIAN')")
    @PostMapping(value = "take", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> takeCopy(@RequestBody CopyDto copyDto) {
        return ok(copyService.takeCopy(copyDto));
    }

    @PreAuthorize("hasRole('LIBRARIAN')")
    @PostMapping(value = "return", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> returnCopy(@RequestBody CopyDto copyDto) {
        return ok(copyService.returnCopy(copyDto));
    }

    @PreAuthorize("hasRole('MEMBER')")
    @GetMapping(value = "user", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CopyDto>> getCurrentUserCopies(Principal principal) {
        return ok(copyService.getBooksByUserId(userService.getByUserNumber(principal.getName())));
    }

    @PreAuthorize("hasRole('LIBRARIAN')")
    @GetMapping(value = "user/{userNumber}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CopyDto>> getUserCopiesByUserNumber(@PathVariable String userNumber) {
        return ok(copyService.getAllDtoByUser(userService.getByUserNumber(userNumber)));
    }
}
