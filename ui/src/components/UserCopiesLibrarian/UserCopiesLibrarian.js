import {
    fetchCopiesByUserLibrarian,
    returnCopyByCopyId,
    takeCopyByCopyId,
} from '../../api/apiEndpoints';
import { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Container,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
} from '@material-ui/core';
import moment from 'moment';
import handleError from '../errors';
import { useHistory } from 'react-router-dom';
import {
    PrimaryOutlinedButton,
    PrimaryOutlinedGreenButton,
    StyledTableCell,
    StyledTableRow,
} from '../StyledItems';
import ErrorIcon from '@material-ui/icons/Error';
import { red } from '@material-ui/core/colors';

const useStyle = makeStyles({
    table: {
        minWidth: 700,
    },
});

const UserCopiesLibrarian = (userNumber) => {
    const classes = useStyle();
    const [copies, setCopies] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        mount();
    }, []);

    const takeCopy = (copyId) => {
        takeCopyByCopyId(copyId).then(() => mount());
    };

    const returnCopy = (copyId) => {
        returnCopyByCopyId(copyId).then(() => mount());
    };

    const mount = () => {
        fetchCopiesByUserLibrarian(userNumber.userNumber.userNumber)
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => history.push(handleError(error.response)))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="center">
                                    Author
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Due at
                                </StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center">
                                    Library
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Action
                                </StyledTableCell>
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
                                        <StyledTableCell>
                                            {copy.book.title}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {copy.book.author.name}
                                        </StyledTableCell>
                                        {copy.dueAt == null ? (
                                            <StyledTableCell align="center">
                                                Reserved
                                            </StyledTableCell>
                                        ) : (
                                            <StyledTableCell align="center">
                                                {moment(copy.dueAt).format(
                                                    'YYYY MM DD'
                                                )}
                                            </StyledTableCell>
                                        )}
                                        <StyledTableCell align="center">
                                            {new Date(copy.dueAt) <=
                                                new Date() &&
                                            copy.dueAt != null ? (
                                                <Box
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexWrap: 'wrap',
                                                        height: '100%',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    <ErrorIcon
                                                        fontSize="small"
                                                        style={{
                                                            color: red[500],
                                                        }}
                                                    />
                                                </Box>
                                            ) : null}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="center"
                                            padding={0}
                                        >
                                            {copy.library.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {!copy.taken ? (
                                                <PrimaryOutlinedGreenButton
                                                    onClick={() =>
                                                        takeCopy(copy.id)
                                                    }
                                                >
                                                    Take
                                                </PrimaryOutlinedGreenButton>
                                            ) : (
                                                <PrimaryOutlinedButton
                                                    onClick={() =>
                                                        returnCopy(copy.id)
                                                    }
                                                >
                                                    Return
                                                </PrimaryOutlinedButton>
                                            )}
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

export default UserCopiesLibrarian;
