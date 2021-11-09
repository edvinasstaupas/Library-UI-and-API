package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Copy;
import lt.edvinasstaupas.api.libraryapi.repository.CopyRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CopyService implements IEntityService<Copy> {

    private final CopyRepository copyRepository;

    @Override
    public void save(Copy copy) {

    }

    @Override
    public void delete(Copy copy) {

    }

    @Override
    public Copy getById(Long id) {
        return null;
    }
}
