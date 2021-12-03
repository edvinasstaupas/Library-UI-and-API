package lt.edvinasstaupas.api.libraryapi.service.mapper;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @param <B> base entity class
 * @param <D> dto entity class
 * @param <C> create dto entity class
 */

public interface IMapper<B, D, C> {

    D convertToDto(B b);

    B convertToDomain(D d);

    B convertToDomainFromCreate(C c);

    default List<D> mapList(List<B> bMap) {
        return bMap.stream().map(this::convertToDto).collect(Collectors.toList());
    }
}
