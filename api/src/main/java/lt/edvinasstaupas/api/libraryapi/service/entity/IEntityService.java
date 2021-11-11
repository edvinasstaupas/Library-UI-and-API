package lt.edvinasstaupas.api.libraryapi.service.entity;

import java.util.List;

/**
 * @param <B> base entity class
 * @param <D> dto entity class
 * @param <C> create dto entity class
 */

public interface IEntityService<B, D, C> {
    void save(B b);

    void delete(B B);

    B getById(Long id);

    List<D> getAllDto();

    D getByIdDto(Long id);

    void update(D d);

    D create(C c);
}
