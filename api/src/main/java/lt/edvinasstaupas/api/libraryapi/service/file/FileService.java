package lt.edvinasstaupas.api.libraryapi.service.file;

import lt.edvinasstaupas.api.libraryapi.exception.file.FileException;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;

@Service
public class FileService {
    private final Path fileLocation = Paths.get(".files").toAbsolutePath();

    public void saveFileInSystem(MultipartFile file) {
        createDirectory();

        try {
            Path newPath = fileLocation.resolve(getUniqueFileName(file));
            Files.copy(file.getInputStream(), newPath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public InputStream getFileByNameFromFileSystem(String fileName) {
        var path = fileLocation.resolve(fileName);
        try {
            return Files.newInputStream(path);
        } catch (IOException e) {
            e.printStackTrace();
            throw new FileException("Cannot create file with name: " + fileName);
        }
    }

    public MediaType getFileMediaType(String fileName) {
        return MediaType.valueOf(URLConnection.guessContentTypeFromName(fileName));
    }

    private String getUniqueFileName(MultipartFile file) {
        var fileName = file.getOriginalFilename();
        var nanoDate = LocalDateTime.now().getNano();
        return String.format("%s_%s", nanoDate, fileName);
    }

    private void createDirectory() {
        try {
            if (!Files.exists(fileLocation)) {
                Files.createDirectory(fileLocation);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
