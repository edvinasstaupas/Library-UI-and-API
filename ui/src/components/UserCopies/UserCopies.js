import {returnCopyByCopyId, takeCopyByCopyId,} from '../../api/apiEndpoints';
import {useEffect} from 'react';
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
import {useHistory} from 'react-router-dom';
import {PrimaryOutlinedButton, StyledTableCell, StyledTableRow,} from '../StyledItems';
import ErrorIcon from '@material-ui/icons/Error';
import {red} from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux';

const useStyle = makeStyles({
    table: {
        minWidth: 700,
    },
});

const UserCopies = (props) => {
    const copies = props.copies;
    const update = props.update;
    const loading = props.isLoading;
    const classes = useStyle();
    const user = useSelector((state) => state.user);

    const history = useHistory();

    const takeCopy = (copyId) => {
        takeCopyByCopyId(copyId)
            .then(() => update())
            .catch((error) => history.push(handleError(error.response)));
    };

    const returnCopy = (copyId) => {
        returnCopyByCopyId(copyId)
            .then(() => update())
            .catch((error) => history.push(handleError(error.response)));
    };

    useEffect(() => {
        if (user.loggedInUser == null) {
            history.push('/');
        }
    }, [history, user]);

    return (
        <>
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow id={-3}>
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
                                {user.loggedInUser.roles.includes('ROLE_LIBRARIAN') ? (
                                    <StyledTableCell align="center">
                                        Action
                                    </StyledTableCell>
                                ) : null}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <StyledTableRow id={-1}>
                                    <StyledTableCell colSpan={6} align="center">
                                        <CircularProgress/>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ) : copies.length === 0 ? (
                                <StyledTableRow id={-2}>
                                    <StyledTableCell colSpan={6} align="center">
                                        List is empty
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
                                        <StyledTableCell align="center">
                                            {copy.library.name}
                                        </StyledTableCell>
                                        {user.loggedInUser.roles.includes('ROLE_LIBRARIAN') ? (
                                            <StyledTableCell align="center">
                                                {!copy.taken ? (
                                                    <PrimaryOutlinedButton
                                                        onClick={() =>
                                                            takeCopy(copy.id)
                                                        }
                                                    >
                                                        Take
                                                    </PrimaryOutlinedButton>
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
                                        ) : null}
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
