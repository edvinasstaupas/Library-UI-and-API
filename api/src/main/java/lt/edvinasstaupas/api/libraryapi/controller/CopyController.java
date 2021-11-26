package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CopyDto;
import lt.edvinasstaupas.api.libraryapi.dto.copy.CreateCopyDto;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.service.entity.CopyService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("copy")
@RequiredArgsConstructor
public class CopyController {

    private final CopyService copyService;

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

    @PostMapping(value = "take", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CopyDto> takenCopyById(@RequestBody CopyDto copyDto) {
        Copy copy = copyService.getById(copyDto.getId());
        copy.setTaken(true);
        copy.setTakenAt(new Date());
        //TODO add current user here
        //copy.getTakenBy();
        return ok(copyService.updateDomain(copy));
    }

}
