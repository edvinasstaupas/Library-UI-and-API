import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import 'react-day-picker/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
    createBookApi, createCopyApi,
    fetchAuthors,
    fetchBooks,
    fetchBooksNoPagination,
    fetchLibraries
} from "../../../api/apiEndpoints";
import {PrimaryButton} from "../../../components/StyledItems";
import {Field, Form, Formik} from 'formik';
import 'moment/locale/en-gb';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from '@material-ui/core';

const LibrarianAddCopy = () => {

    const history = useHistory();

    const [book, setBook] = useState({});
    const [library, setLibrary] = useState({});

    const [books, setBooks] = useState([]);
    const [libraries, setLibraries] = useState([]);

    const handleChangeBook = (event) => {
        setBook(event.target.value);
    };

const handleChangeLibrary = (event) => {
        setLibrary(event.target.value);
    };


    useEffect(() => {
        fetchBooksNoPagination().then((data) => setBooks(data.data));
        fetchLibraries().then((data) => setLibraries(data.data));
    }, []);

    function createCopy(data, helper) {
        data.book = book;
        data.library = library;
        createCopyApi(data).then(() => {
            history.push('/book/' + book.id + '/copies');
        });
        helper.setSubmitting(false);
    }

    return (
        <>
            <Container style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box style={{
                    minWidth: '60%',
                }}>
                    <Formik
                        initialValues={{
                            book: {},
                            library: {},
                        }}
                        onSubmit={createCopy}
                    >
                        {(props) => (
                            <Card>
                                <Form onSubmit={props.handleSubmit} >
                                    <CardHeader
                                        title="Add copy"
                                        titleTypographyProps={{
                                            align: 'center',
                                        }}
                                        action={null}
                                        subheaderTypographyProps={{
                                            align: 'center',
                                        }}
                                        sx={{
                                            backgroundColor: (
                                                theme
                                            ) =>
                                                theme.palette
                                                    .mode ===
                                                'light'
                                                    ? theme.palette
                                                        .grey[200]
                                                    : theme.palette
                                                        .grey[700],
                                        }}
                                    />
                                    <CardContent>
                                        <Grid item xs={12}>
                                            <FormControl
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            >
                                                <InputLabel
                                                    id="book-label"
                                                >
                                                    Book
                                                </InputLabel>
                                                <Select
                                                    labelId='book-label'
                                                    label='book'
                                                    id="book"
                                                    value={
                                                        book
                                                    }
                                                    onChange={
                                                        handleChangeBook
                                                    }
                                                >
                                                    {books.map(
                                                        (b) => (
                                                            <MenuItem
                                                                value={
                                                                    b
                                                                }
                                                            >
                                                                {
                                                                    b.title + ' | ' + b.author.name
                                                                }
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl><FormControl
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            >
                                                <InputLabel
                                                    id="library-label"
                                                >
                                                    Library
                                                </InputLabel>
                                                <Select
                                                    labelId='library-label'
                                                    id="library"
                                                    label='Library'
                                                    value={
                                                        library
                                                    }
                                                    onChange={
                                                        handleChangeLibrary
                                                    }
                                                >
                                                    {libraries.map(
                                                        (l) => (
                                                            <MenuItem
                                                                value={
                                                                    l
                                                                }
                                                            >
                                                                {
                                                                    l.name
                                                                }
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent:
                                                    'center',
                                            }}
                                        >
                                            {props.isSubmitting ? (
                                                <span>
                                                                Submiting...
                                                            </span>
                                            ) : (
                                                <PrimaryButton type="submit">
                                                    Submit
                                                </PrimaryButton>
                                            )}
                                        </Box>
                                    </CardActions>
                                </Form>
                            </Card>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    );
};

export default LibrarianAddCopy;