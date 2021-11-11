package lt.edvinasstaupas.api.libraryapi.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Builder
@Getter
public class ExceptionResponse {

    private final String message;

    private final int status;

    private final String timeStamp = LocalDateTime.now().toString();

}
