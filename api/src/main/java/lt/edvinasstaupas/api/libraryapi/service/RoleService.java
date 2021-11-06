package lt.edvinasstaupas.api.libraryapi.service;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Role;
import lt.edvinasstaupas.api.libraryapi.exception.NoSuchEntityException;
import lt.edvinasstaupas.api.libraryapi.repository.RoleRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleService implements IEntityService<Role> {

    private final RoleRepository roleRepository;

    @Override
    public void save(Role role) {

    }

    @Override
    public void delete(Role role) {

    }

    @Override
    public Role findById(Long id) throws NoSuchEntityException {
        return null;
    }
}
