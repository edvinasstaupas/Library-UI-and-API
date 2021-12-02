import { fetchCopiesByUser } from '../../api/apiEndpoints';
import { useEffect, useState } from 'react';
import {
    CircularProgress,
    Container,
    makeStyles,
    Paper,
    Table,
    TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow, withStyles,
} from '@material-ui/core';
import moment from 'moment';
import handleError from '../errors';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        minWidth: 700,
    },
});


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const UserCopies = () => {
    const classes = useStyle();
    const [copies, setCopies] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        fetchCopiesByUser()
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => history.push(handleError(error.response)))
            .finally(() => setLoading(false));
    }, [history]);

    return (
        <>
            {() => console.log(copies[0].dueAt)}
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="center">Author</StyledTableCell>
                                <StyledTableCell align="center">Due at</StyledTableCell>
                                <StyledTableCell align="center">Library</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <StyledTableRow id={-1}>
                                    <StyledTableCell colSpan={5} align="center">
                                        <CircularProgress />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ) : (
                                copies.map((copy) => (
                                    <StyledTableRow id={copy.id}>
                                        <StyledTableCell>{copy.book.title}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            {copy.book.author.name}
                                        </StyledTableCell>
                                        {new Date(copy.dueAt) <= new Date() ? (
                                            <StyledTableCell align="center"
                                                style={{
                                                    backgroundColor: 'red',
                                                }}
                                            >
                                                {moment(copy.dueAt).format(
                                                    'YYYY MM DD'
                                                )}
                                            </StyledTableCell>
                                        ) : (
                                            <StyledTableCell align="center">
                                                {moment(copy.dueAt).format(
                                                    'YYYY MM DD'
                                                )}
                                            </StyledTableCell>
                                        )}
                                        <StyledTableCell align="center">
                                            {copy.library.name}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default UserCopies;
