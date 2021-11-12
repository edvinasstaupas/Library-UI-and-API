package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.service.file.FileService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("file")
public class FileController {

    private final FileService fileService;

    @PostMapping("upload")
    public void saveFileInSystem(@RequestParam MultipartFile file) {
        fileService.saveFileInSystem(file);
    }

    @GetMapping("download/{fileName}")
    public ResponseEntity<Resource> getFileByNameFromSystem(@PathVariable String fileName) {
        return fileService.getResourceResponseEntity(fileName);
    }
}
