package lt.edvinasstaupas.api.libraryapi.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    private Long id;

    private String author;

    private String title;
}
