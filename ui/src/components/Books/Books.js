import {useEffect, useState} from 'react';
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
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {fetchBooks} from "../../api/apiEndpoints";

const useStyle = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Books = (fetchedBooks) => {
    const classes = useStyle();

    const books = useSelector(state => state.books)
    const [loading, setLoading] = useState(true);

    useEffect(() => {

            setLoading(false)
    }, []);

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
                                        <CircularProgress/>
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
