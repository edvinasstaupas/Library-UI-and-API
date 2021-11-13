package lt.edvinasstaupas.api.libraryapi.exception.nosuchentity;

public class NoSuchBookException extends NoSuchEntityException{
    public NoSuchBookException(Long id) {
        super("book", id);
    }
}

