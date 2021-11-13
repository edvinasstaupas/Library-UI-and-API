package lt.edvinasstaupas.api.libraryapi.exception.nosuchentity;

public class NoSuchUserException extends NoSuchEntityException {
    public NoSuchUserException(Long id) {
        super("user", id);
    }
}
