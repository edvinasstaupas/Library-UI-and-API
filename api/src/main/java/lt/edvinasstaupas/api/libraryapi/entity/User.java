package lt.edvinasstaupas.api.libraryapi.entity;

import lombok.*;
import lt.edvinasstaupas.api.libraryapi.service.entity.RoleFactory;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
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

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "avatar_path")
    private String avatarPath;

    @OneToOne
    private Address address;

    @OneToMany(mappedBy = "takenBy")
    private List<Copy> copies;

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