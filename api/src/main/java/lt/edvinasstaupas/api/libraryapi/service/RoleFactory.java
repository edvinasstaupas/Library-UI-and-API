package lt.edvinasstaupas.api.libraryapi.service;

import lt.edvinasstaupas.api.libraryapi.entity.Role;

public class RoleFactory {

    public static Role getUserRole() {
        return new Role(1L, "USER");
    }

    public static Role getAdminRole() {
        return new Role(2L, "ADMIN");
    }
}
