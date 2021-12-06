package lt.edvinasstaupas.api.libraryapi.dto.book;

import lombok.Getter;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class PaginatedListDto<T> {
    private final List<T> list;
    private final int totalRows;

    public PaginatedListDto(List<T> list, Pageable pageable) {
        this.list = list.stream()
                .skip((long) pageable.getPageNumber() * pageable.getPageSize())
                .limit(pageable.getPageSize())
                .collect(Collectors.toList());
        this.totalRows = list.size();
    }
}
