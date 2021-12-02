import {fetchCopiesByBook, takeCopyByCopyId} from '../../api/apiEndpoints';
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
import {useHistory, useParams} from 'react-router-dom';
import handleError from '../errors';

const useStyle = makeStyles({
    table: {
        minWidth: 650,
    },
});

const BookCopies = () => {
    const {id} = useParams();

    const classes = useStyle();
    const [copies, setCopies] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        fetchCopiesByBook(id)
            .then(({data}) => {
                setCopies(data);
            })
            .catch((error) => history.push(handleError(error.response)))
            .finally(() => setLoading(false));
    }, [history, id]);

    const takeBook = (copyId) => {
        takeCopyByCopyId(copyId)
            .then(() => {
                history.push('/user/copies');
            })
            .catch((error) => {
                history.push(handleError(error.response));
            });
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
                            {copies.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} align="center">List is empty</TableCell>
                                </TableRow>
                            ) : [loading ? (
                                <TableRow id={-1}>
                                    <TableCell colSpan={5} align="center">
                                        <CircularProgress/>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                copies.map((copy) => (
                                    <TableRow id={copy.id}>
                                        <TableCell>{copy.book.title}</TableCell>
                                        <TableCell>
                                            {copy.book.author.name}
                                        </TableCell>
                                        <TableCell>
                                            {copy.library.name}
                                        </TableCell>
                                        <TableCell>
                                            {copy.taken ? (
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
                                                    Reserve
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )]}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default BookCopies;
