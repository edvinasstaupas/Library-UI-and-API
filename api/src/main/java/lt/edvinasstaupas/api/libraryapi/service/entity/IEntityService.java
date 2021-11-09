package lt.edvinasstaupas.api.libraryapi.service.entity;

public interface IEntityService<T> {
    void save(T t);

    void delete(T t);

    T getById(Long id);
}
