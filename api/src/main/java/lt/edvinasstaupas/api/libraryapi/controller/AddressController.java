package lt.edvinasstaupas.api.libraryapi.controller;

import lombok.RequiredArgsConstructor;
import lt.edvinasstaupas.api.libraryapi.dto.address.AddressDto;
import lt.edvinasstaupas.api.libraryapi.dto.address.CreateAddressDto;
import lt.edvinasstaupas.api.libraryapi.entity.Address;
import lt.edvinasstaupas.api.libraryapi.service.entity.AddressService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("address")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AddressDto>> getAddresss() {
        return ok(addressService.getAllDto());
    }

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AddressDto> getAddressById(@PathVariable Long id) {
        AddressDto addressDto = addressService.getByIdDto(id);
        if (addressDto == null)
            return notFound().build();
        return ok(addressService.getByIdDto(id));
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AddressDto> createAddress(@RequestBody CreateAddressDto createAddressDto) {
        return ok(addressService.create(createAddressDto));
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AddressDto> putAddress(@RequestBody AddressDto AddressDto) {
        addressService.update(AddressDto);
        return ok(addressService.getByIdDto(AddressDto.getId()));
    }

    @DeleteMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteAddressById(@PathVariable Long id) {
        Address address = addressService.getById(id);
        if (address == null)
            return notFound().build();
        addressService.delete(address);
        return ok().build();
    }

}
