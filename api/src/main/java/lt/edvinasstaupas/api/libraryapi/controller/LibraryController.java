package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.library.CreateLibraryDto;
import lt.edvinasstaupas.api.libraryapi.entity.Library;
import lt.edvinasstaupas.api.libraryapi.service.entity.LibraryService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("library")
@RequiredArgsConstructor
public class LibraryController {

    private final LibraryService libraryService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Library>> getCopies() {
        return ok(libraryService.getAll());
    }

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Library> getLibraryById(@PathVariable Long id) {
        Library library = libraryService.getById(id);
        if (library == null)
            return notFound().build();
        return ok(libraryService.getById(id));
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Library> createLibrary(@RequestBody CreateLibraryDto createLibrary) {
        return ok(libraryService.create(createLibrary));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Library> putLibraryById(@RequestBody Library library) {
        libraryService.update(library);
        return ok(library);
    }

    @DeleteMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteLibraryById(@PathVariable Long id) {
        Library library = libraryService.getById(id);
        if (library == null)
            return notFound().build();
        libraryService.delete(library);
        return ok().build();
    }

}
