package lt.edvinasstaupas.api.libraryapi.exception.nosuchentity;

public class NoSuchAddressException extends NoSuchEntityException {
    public NoSuchAddressException(Long id) {
        super("address", id);
    }
}

