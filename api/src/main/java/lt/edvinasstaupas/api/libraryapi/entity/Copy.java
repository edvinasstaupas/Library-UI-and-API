package lt.edvinasstaupas.api.libraryapi.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Copy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "library_id")
    private Library library;

    @NotNull
    @Column(name = "is_taken")
    private boolean isTaken = false;

    @NotNull
    @Column(name = "is_reserved")
    private boolean isReserved = false;

    @Column(name = "taken_at")
    private Date takenAt;

    @Column(name = "due_at")
    private Date dueAt;

    @ManyToOne
    @JoinColumn(name = "taken_by_user_id")
    private User takenBy;
}
