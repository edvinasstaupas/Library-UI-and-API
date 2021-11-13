package lt.edvinasstaupas.api.libraryapi.service.entity;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.address.AddressDto;
import lt.edvinasstaupas.api.libraryapi.dto.address.CreateAddressDto;
import lt.edvinasstaupas.api.libraryapi.entity.Address;
import lt.edvinasstaupas.api.libraryapi.exception.nosuchentity.NoSuchAddressException;
import lt.edvinasstaupas.api.libraryapi.repository.AddressRepository;
import lt.edvinasstaupas.api.libraryapi.service.mapper.AddressMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AddressService implements IEntityService<Address, AddressDto, CreateAddressDto> {

    private final AddressRepository addressRepository;

    private final AddressMapper addressMapper;

    @Override
    public void save(Address address) {
        addressRepository.save(address);
    }

    @Override
    public AddressDto create(CreateAddressDto createAddressDto) {
        Address address = addressMapper.convertToDomainFromCreate(createAddressDto);
        save(address);
        return addressMapper.convertToDto(address);
    }

    @Override
    public void delete(Address address) {
        addressRepository.delete(address);
    }

    @Override
    public Address getById(Long id) {
        return addressRepository.findById(id).orElseThrow(() -> new NoSuchAddressException(id));
    }

    @Override
    public AddressDto getByIdDto(Long id) {
        return addressMapper.convertToDto(getById(id));
    }

    @Override
    public List<AddressDto> getAllDto() {
        return addressRepository.findAll().stream()
                .map(addressMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void update(AddressDto addressDto) {
        save(addressMapper.convertToDomain(addressDto));
    }
}
