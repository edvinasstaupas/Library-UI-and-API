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
import {PrimaryOutlinedButton, StyledTableCell, StyledTableRow} from "../StyledItems";

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
                            <StyledTableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align='center'>Author</StyledTableCell>
                                <StyledTableCell align='center'>Library</StyledTableCell>
                                <StyledTableCell align='center'>Available</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {copies.length === 0 ? (
                                <TableRow>
                                    <StyledTableRow colSpan={5} align="center">List is empty</StyledTableRow>
                                </TableRow>
                            ) : [loading ? (
                                <StyledTableRow id={-1}>
                                    <StyledTableCell colSpan={5} align="center">
                                        <CircularProgress/>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ) : (
                                copies.map((copy) => (
                                    <StyledTableRow id={copy.id}>
                                        <StyledTableCell>{copy.book.title}</StyledTableCell>
                                        <StyledTableCell align='center'>
                                            {copy.book.author.name}
                                        </StyledTableCell >
                                        <StyledTableCell align='center'>
                                            {copy.library.name}
                                        </StyledTableCell>
                                        <StyledTableCell align='center'>
                                            {copy.taken ? (
                                                <PrimaryOutlinedButton
                                                    disabled
                                                >
                                                    Taken
                                                </PrimaryOutlinedButton>
                                            ) : (
                                                <PrimaryOutlinedButton
                                                    onClick={() =>
                                                        takeBook(copy.id)
                                                    }
                                                >
                                                    Reserve
                                                </PrimaryOutlinedButton>
                                            )}
                                        </StyledTableCell>
                                    </StyledTableRow>
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
