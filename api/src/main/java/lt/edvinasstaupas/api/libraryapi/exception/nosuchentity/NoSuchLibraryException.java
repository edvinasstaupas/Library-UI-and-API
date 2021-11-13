package lt.edvinasstaupas.api.libraryapi.exception.nosuchentity;

public class NoSuchLibraryException extends NoSuchEntityException{
    public NoSuchLibraryException(Long id) {
        super("library", id);
    }
}
