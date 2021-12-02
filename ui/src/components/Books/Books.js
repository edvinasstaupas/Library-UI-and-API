import {
    Button,
    Container,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const useStyle = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Books = () => {
    const classes = useStyle();

    const state = useSelector((state) => state.books);

    return (
        <>
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Learn more</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.bookList == null ? null :
                                ([state.bookList.length === 0 ?
                                        (<TableRow>
                                            <TableCell colSpan={5} align="center">List is empty</TableCell>
                                        </TableRow>)
                                        :
                                        (state.bookList.map((book) => (
                                                    <TableRow id={book.id}>
                                                        <TableCell>{book.title}</TableCell>
                                                        <TableCell>
                                                            {book.author.name}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button
                                                                component={NavLink}
                                                                className="btn btn-primary"
                                                                to={
                                                                    '/book/' +
                                                                    book.id +
                                                                    '/copies'
                                                                }
                                                            >
                                                                Check out
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            )
                                        )
                                    ]
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default Books;
