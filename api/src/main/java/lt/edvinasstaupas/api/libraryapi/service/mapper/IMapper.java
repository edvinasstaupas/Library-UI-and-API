package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lt.edvinasstaupas.api.libraryapi.dto.BookDto;
import lt.edvinasstaupas.api.libraryapi.entity.Book;

/**
 *
 * @param <B> base entity class
 * @param <D> dto entity class
 * @param <C> create dto entity class
 */

public interface IMapper<B, D, C> {

    D convertToDto(B b);

    B convertToDomain(D d);

    B convertToDomainFromCreate(C c);
}
