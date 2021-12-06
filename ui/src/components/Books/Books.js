import {
    CircularProgress,
    Container,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TablePagination,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {PrimaryButton, StyledTableCell, StyledTableRow} from '../StyledItems';
import {setLoading} from "../../state/Books/BooksActions";


const useStyle = makeStyles({
    table: {
        minWidth: 700,
    },
});

const Books = (props) => {
    const classes = useStyle();

    const books = props.books;
    const page = props.page;
    const size = props.size;
    const totalRows = props.totalRows;
    const setPage = props.setPage;
    const setSize = props.setSize;

    const dispatch = useDispatch();
    const state = useSelector((state) => state.books);

    function onPageChange() {
    }

    function onRowsPerPageChange(event) {
        dispatch(setLoading(true))
        setSize(event.target.value)
    }

    function handleNextButtonClick() {
        dispatch(setLoading(true))
        setPage(page + 1);
    }

    function handlePreviousButtonClick() {
        dispatch(setLoading(true))
        setPage(page - 1);
    }

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
                                    Learn more
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {
                                state.loading ? (
                                    <StyledTableRow id={-1}>
                                        <StyledTableCell
                                            colSpan={5}
                                            align="center"
                                        >
                                            <CircularProgress/>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ) : (
                                    [
                                        books.length === 0 ? (
                                            <StyledTableRow>
                                                <StyledTableCell
                                                    colSpan={5}
                                                    align="center"
                                                >
                                                    List is empty
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ) : (
                                            books.map((book) => (
                                                <StyledTableRow
                                                    id={book.id}
                                                >
                                                    <StyledTableCell>
                                                        {book.title}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        {book.author.name}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <PrimaryButton
                                                            component={
                                                                NavLink
                                                            }
                                                            to={
                                                                '/book/' +
                                                                book.id +
                                                                '/copies'
                                                            }
                                                        >
                                                            Check out
                                                        </PrimaryButton>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))
                                        ),
                                    ]
                                )}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component='div'
                        rowsPerPage={size}
                        page={page}
                        onPageChange={onPageChange}
                        onRowsPerPageChange={onRowsPerPageChange}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                            'onClick': () => handlePreviousButtonClick(),
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                            'onClick': () => handleNextButtonClick(),
                        }}
                        count={totalRows}/>
                </TableContainer>
            </Container>
        </>
    );
};

export default Books;
