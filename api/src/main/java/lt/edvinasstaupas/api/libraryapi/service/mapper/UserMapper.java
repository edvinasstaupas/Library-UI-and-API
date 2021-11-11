package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.user.CreateUserDto;
import lt.edvinasstaupas.api.libraryapi.dto.user.UserDto;
import lt.edvinasstaupas.api.libraryapi.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMapper implements IMapper<User, UserDto, CreateUserDto> {

    private final ModelMapper modelMapper;

    @Override
    public UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public User convertToDomain(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

    @Override
    public User convertToDomainFromCreate(CreateUserDto createUserDto) {
        return modelMapper.map(createUserDto, User.class);
    }
}
