package lt.edvinasstaupas.api.libraryapi.entity;

import lombok.*;
import lt.edvinasstaupas.api.libraryapi.service.RoleFactory;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany()
    private Set<Role> roles = new HashSet<>();

    public boolean hasPrivileges() {
        return roles.contains(RoleFactory.getAdminRole());
    }
/*
    @Override
    public int compareTo(User o) {
        return Math.toIntExact(this.getId() - o.getId());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }*/
}