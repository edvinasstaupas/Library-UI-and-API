package lt.edvinasstaupas.api.libraryapi.service;

import lt.edvinasstaupas.api.libraryapi.exception.NoSuchEntityException;

public interface IEntityService<T> {
    void save(T t);

    void delete(T t);

    T findById(Long id) throws NoSuchEntityException;
}
