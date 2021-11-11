package lt.edvinasstaupas.api.libraryapi.advice;

import lt.edvinasstaupas.api.libraryapi.exception.ExceptionResponse;
import lt.edvinasstaupas.api.libraryapi.exception.file.FileException;
import org.apache.tomcat.util.http.fileupload.impl.SizeLimitExceededException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlerAdvice {

    @ExceptionHandler(SizeLimitExceededException.class)
    @ResponseStatus(HttpStatus.PAYLOAD_TOO_LARGE)
    public ExceptionResponse handlingToLargeFileException(SizeLimitExceededException ex) {
        return ExceptionResponse.builder()
                .message(ex.getMessage())
                .status(HttpStatus.PAYLOAD_TOO_LARGE.value())
                .build();
    }

    @ExceptionHandler(FileException.class)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ExceptionResponse handlingProductNotFoundException(FileException ex) {
        return ExceptionResponse.builder()
                .message(ex.getMessage())
                .status(HttpStatus.NO_CONTENT.value())
                .build();
    }
}
