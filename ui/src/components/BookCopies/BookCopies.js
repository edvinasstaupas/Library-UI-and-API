import { fetchCopiesByBook, takeCopyByCopyId } from '../../api/apiEndpoints';
import { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        minWidth: 650,
    },
});

const BookCopies = () => {
    const { id } = useParams();

    const classes = useStyle();
    const [copies, setCopies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(id);
        fetchCopiesByBook(id)
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => console.log(error.name))
            .finally(() => setLoading(false));
    }, [id]);

    const takeBook = (copyId) => {
        takeCopyByCopyId(copyId)
            .then(() => {
                this.context.router.push('http://localhost:3000/user/copies');
            })
            .catch((error) => console.log(error.name));
    };

    return (
        <>
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Library</TableCell>
                                <TableCell>Available</TableCell>
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
                                copies.map((copy) => (
                                    <TableRow id={copy.id}>
                                        <TableCell>{copy.book.title}</TableCell>
                                        <TableCell>
                                            {copy.book.author.firstName}{' '}
                                            {copy.book.author.lastName}
                                        </TableCell>
                                        <TableCell>
                                            {copy.library.name}
                                        </TableCell>
                                        <TableCell>
                                            {copy.library.taken ? (
                                                <Button
                                                    variant="outlined"
                                                    disabled
                                                >
                                                    Taken
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        takeBook(copy.id)
                                                    }
                                                >
                                                    Available
                                                </Button>
                                            )}
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

export default BookCopies;
