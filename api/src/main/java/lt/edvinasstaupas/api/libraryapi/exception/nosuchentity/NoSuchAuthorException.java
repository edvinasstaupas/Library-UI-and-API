package lt.edvinasstaupas.api.libraryapi.exception.nosuchentity;

public class NoSuchAuthorException extends NoSuchEntityException {
    public NoSuchAuthorException(Long id) {
        super("author", id);
    }
}

