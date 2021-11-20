import { fetchCopiesByUser, getUserId } from '../../api/apiEndpoints';
import { useEffect, useState } from 'react';
import {
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

const Copies = () => {
    const classes = useStyle();
    const [id, setId] = useState( //this is not ideal, but i do not know any other way of doing this
        getUserId()
            .then(({ data }) => {
                console.log(data.id);
                setId(data.id);
            })
            .catch((error) => console.log(error.name))
    );
    const [copies, setCopies] = useState([]);

    useEffect(() => {
        fetchCopiesByUser(id)
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => console.log(error.name));
    }, [id]);

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
                            {copies.map((copy) => (
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
                                    <TableCell>{copy.library.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default Copies;
