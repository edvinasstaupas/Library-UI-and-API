package lt.edvinasstaupas.api.libraryapi.advice;

import lt.edvinasstaupas.api.libraryapi.exception.ExceptionResponse;
import lt.edvinasstaupas.api.libraryapi.exception.file.FileException;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchEntityException;
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
    public ExceptionResponse handlingFileException(FileException ex) {
        return ExceptionResponse.builder()
                .message(ex.getMessage())
                .status(HttpStatus.NO_CONTENT.value())
                .build();
    }

    @ExceptionHandler(NoSuchEntityException.class)
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    public ExceptionResponse handlingNoSuchEntityException(NoSuchEntityException ex) {
        return ExceptionResponse.builder()
                .message(ex.getMessage())
                .status(HttpStatus.NOT_ACCEPTABLE.value())
                .build();
    }
}
