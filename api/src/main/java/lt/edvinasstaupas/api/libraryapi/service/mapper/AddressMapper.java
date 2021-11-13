package lt.edvinasstaupas.api.libraryapi.service.mapper;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.address.AddressDto;
import lt.edvinasstaupas.api.libraryapi.dto.address.CreateAddressDto;
import lt.edvinasstaupas.api.libraryapi.entity.Address;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AddressMapper implements IMapper<Address, AddressDto, CreateAddressDto> {

    private final ModelMapper modelMapper;

    @Override
    public AddressDto convertToDto(Address address) {
        return modelMapper.map(address, AddressDto.class);
    }

    @Override
    public Address convertToDomain(AddressDto addressDto) {
        return modelMapper.map(addressDto, Address.class);
    }

    @Override
    public Address convertToDomainFromCreate(CreateAddressDto createAddressDto) {
        return modelMapper.map(createAddressDto, Address.class);
    }
}
