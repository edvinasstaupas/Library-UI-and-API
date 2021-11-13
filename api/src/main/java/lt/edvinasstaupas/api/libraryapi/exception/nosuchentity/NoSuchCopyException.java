package lt.edvinasstaupas.api.libraryapi.exception.nosuchentity;

public class NoSuchCopyException extends NoSuchEntityException {
    public NoSuchCopyException(Long id) {
        super("copy", id);
    }
}

