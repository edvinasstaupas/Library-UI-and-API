import {
    Button,
    Container,
    makeStyles,
    Paper, styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, withStyles,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

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

const Books = () => {
    const classes = useStyle();

    const state = useSelector((state) => state.books);

    return (
        <>
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="center">Author</StyledTableCell>
                                <StyledTableCell align="center">Learn more</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {state.bookList == null ? null :
                                ([state.bookList.length === 0 ?
                                        (<StyledTableRow>
                                            <TableCell colSpan={5} align="center">List is empty</TableCell>
                                        </StyledTableRow>)
                                        :
                                        (state.bookList.map((book) => (
                                                    <StyledTableRow id={book.id}>
                                                        <StyledTableCell>{book.title}</StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            {book.author.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
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
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                )
                                            )
                                        )
                                    ]
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default Books;
