import { fetchCopiesByUser, getUserId } from '../../api/apiEndpoints';
import { useEffect, useState } from 'react';
import {
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
import moment from 'moment';

const useStyle = makeStyles({
    table: {
        minWidth: 650,
    },
});

const UserCopies = () => {
    const classes = useStyle();
    const [copies, setCopies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCopiesByUser()
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => console.log(error.name))
            .finally(() => setLoading(false));
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
                                <TableCell>Due at</TableCell>
                                <TableCell>Library</TableCell>
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
                                            {moment(copy.dueAt).format(
                                                'YYYY MM DD'
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {copy.library.name}
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

export default UserCopies;
