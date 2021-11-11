package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.user.CreateUserDto;
import lt.edvinasstaupas.api.libraryapi.dto.user.UserDto;
import lt.edvinasstaupas.api.libraryapi.entity.Role;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import lt.edvinasstaupas.api.libraryapi.repository.UserRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.UserMapper;/*
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;*/
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService implements IEntityService<User, UserDto, CreateUserDto>//, UserDetailsService
 {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public void delete(User user) {
        userRepository.delete(user);
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<UserDto> getAllDto() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto getByIdDto(Long id) {
        return userMapper.convertToDto(userRepository.findById(id).orElse(null));
    }

    @Override
    public UserDto create(CreateUserDto createUserDto) {
        User user = userMapper.convertToDomainFromCreate(createUserDto);
        user.setCopies(new ArrayList<>());
        user.setRoles(Set.of(RoleFactory.getUserRole()));
        save(user);
        return userMapper.convertToDto(user);
    }

    @Override
    public void update(UserDto userDto) {
        User user = userMapper.convertToDomain(userDto);
        save(user);
    }

    public UserDto getByUserNumber(String userNumber) {
        return userMapper.convertToDto(userRepository.findByUserNumber(userNumber));
    }

     /*@Override
     public UserDetails loadUserByUsername(String userNumber) throws UsernameNotFoundException {
         return userRepository.loadByUserNumber(userNumber);
     }*/
}
