package lt.edvinasstaupas.api.libraryapi.service.entity;


import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.entity.Role;
import lt.edvinasstaupas.api.libraryapi.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService implements IEntityService<Role, Role, Role> {

    private final RoleRepository roleRepository;

    @Override
    public void save(Role role) {

    }

    @Override
    public void delete(Role role) {

    }

    @Override
    public Role getById(Long id) {
        return null;
    }

    @Override
    public List<Role> getAllDto() {
        return null;
    }

    @Override
    public Role getByIdDto(Long id) {
        return null;
    }

    @Override
    public void update(Role role) {

    }

    @Override
    public Role create(Role role) {
        return null;
    }
}

