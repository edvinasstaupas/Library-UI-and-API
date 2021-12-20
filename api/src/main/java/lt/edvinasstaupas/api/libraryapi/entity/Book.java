package lt.edvinasstaupas.api.libraryapi.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String isbn;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    private String title;

    @OneToMany(mappedBy = "book")
    private List<Copy> copies;

    @NotNull
    @Column(name = "published_at")
    private Date publishedAt;
}
