package lt.edvinasstaupas.api.libraryapi.entity;

import lombok.*;

import javax.persistence.*;

//@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String author;

    private String title;
}
