import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import 'react-day-picker/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {createBookApi, fetchAuthors} from "../../../api/apiEndpoints";
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
import handleError from "../../../components/errors";
import LibrarianSecurity from "../../../components/Librarian/LibrarianSecurity";
import * as React from "react";

const LibrarianAddBook = () => {

    const history = useHistory();

    const [author, setAuthor] = useState('');
    const [date, setDate] = useState(new Date());
    const today = new Date();

    const [authors, setAuthors] = useState([]);

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    useEffect(() => {
        fetchAuthors().then((data) => setAuthors(data.data))
            .catch((error) => history.push(handleError(error.response)));
    }, []);

    function createBook(data, helper) {
        data.author = author;
        createBookApi(data).then((data) => {
            history.push('/librarian/addCopy');
        })
            .catch((error) => history.push(handleError(error.response)));
        helper.setSubmitting(false);
    }

    return (
        <>
            <LibrarianSecurity/>
            <Container style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box>
                    <Formik
                        initialValues={{
                            isbn: '',
                            author: {},
                            title: '',
                            publishedAt: {},
                        }}
                        onSubmit={createBook}
                    >
                        {(props) => (
                            <Card>
                                <Form onSubmit={props.handleSubmit} >
                                    <CardHeader
                                        title="Add book"
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
                                                    <InputLabel htmlFor="isbn">
                                                        ISBN
                                                    </InputLabel>
                                                    <Field
                                                        required
                                                        id="isbn"
                                                        name="isbn"
                                                        label="ISBN"
                                                        as={
                                                            OutlinedInput
                                                        }
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    fullWidth
                                                    variant="outlined"
                                                    margin="dense"
                                                >
                                                    <InputLabel htmlFor="title">
                                                        Title
                                                    </InputLabel>
                                                    <Field
                                                        required
                                                        id="title"
                                                        name="title"
                                                        label="Title"
                                                        as={
                                                            OutlinedInput
                                                        }
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    fullWidth
                                                    variant="outlined"
                                                    margin="dense"
                                                >
                                                    <InputLabel
                                                        id="author-label"
                                                        htmlFor="author"
                                                    >
                                                        Author
                                                    </InputLabel>
                                                    <Select
                                                        id="author"
                                                        value={
                                                            author
                                                        }
                                                        onChange={
                                                            handleAuthorChange
                                                        }
                                                    >
                                                        {authors.map(
                                                            (v) => (
                                                                <MenuItem
                                                                    value={
                                                                        v
                                                                    }
                                                                >
                                                                    {
                                                                        v.name
                                                                    }
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </Select>
                                                </FormControl>
                                                <FormControl
                                                    fullWidth
                                                    variant="outlined"
                                                    margin="dense"
                                                >
                                                    <Field
                                                        id="publishedAt"
                                                        name="publishedAt"
                                                        label="Date of publish"
                                                        type="date"
                                                        defaultValue={new Date().getDate()}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
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

export default LibrarianAddBook;