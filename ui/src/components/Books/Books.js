import { useContext, useEffect } from 'react';
import {
    Button,
    CircularProgress,
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
import { NavLink } from 'react-router-dom';
import { BookContext } from '../../containers/Pages/SearchPage/SearchPage';

const useStyle = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Books = () => {
    const classes = useStyle();

    const { books, loading, fromSearch, setBooksAll } = useContext(BookContext);

    useEffect(() => {
        console.log(fromSearch);
        if (!fromSearch) {
            setBooksAll();
        }
    }, [fromSearch, setBooksAll]);

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
                            {loading ? (
                                <TableRow id={-1}>
                                    <TableCell colSpan={5} align="center">
                                        <CircularProgress />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                books.map((book) => (
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
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default Books;
