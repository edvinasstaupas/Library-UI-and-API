import * as React from 'react';
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    CssBaseline,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../StyledItems';
import { createBookApi, fetchAuthors } from '../../api/apiEndpoints';

const Librarian = () => {
    const history = useHistory();

    const [author, setAuthor] = useState('');

    const [authors, setAuthors] = useState([]);

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };

    useEffect(() => {
        fetchAuthors().then((data) => setAuthors(data.data));
    }, []);

    const searchByUserNumber = (data, helper) => {
        helper.setSubmitting(false);
        const userNumber = data.userNumber;
        history.push('/user/' + userNumber + '/copies');
    };

    function createBook(data, helper) {
        data.author = author;
        data.publishedAt = new Date();
        createBookApi(data).then((data) => {
            history.push('book/' + data.data.id + '/copies');
        });
        helper.setSubmitting(false);
    }

    return (
        <>
            <Container>
                <Box p={10}>
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item key={1} xs={12} sm={10} md={4}>
                            <Formik
                                initialValues={{
                                    userNumber: '',
                                }}
                                onSubmit={searchByUserNumber}
                            >
                                {(props) => (
                                    <div>
                                        <Card>
                                            <Form onSubmit={props.handleSubmit}>
                                                <CardHeader
                                                    title="Check user copies"
                                                    subheader="Enter user number"
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
                                                    <Box
                                                        sx={{
                                                            width: '100%',
                                                            display: 'flex',
                                                            justifyContent:
                                                                'center',
                                                        }}
                                                    >
                                                        <Grid item xs={12}>
                                                            <FormControl
                                                                fullWidth
                                                                variant="outlined"
                                                                margin="dense"
                                                            >
                                                                <InputLabel htmlFor="userNumber">
                                                                    User number
                                                                </InputLabel>
                                                                <Field
                                                                    required
                                                                    id="userNumber"
                                                                    name="userNumber"
                                                                    label="User number"
                                                                    as={
                                                                        OutlinedInput
                                                                    }
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                    </Box>
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
                                                                Search
                                                            </PrimaryButton>
                                                        )}
                                                    </Box>
                                                </CardActions>
                                            </Form>
                                        </Card>
                                    </div>
                                )}
                            </Formik>
                        </Grid>

                        <Grid item key={2} xs={12} sm={10} md={4}>
                            <Formik
                                initialValues={{
                                    isbn: '',
                                    author: {},
                                    title: '',
                                    publishedAt: '',
                                }}
                                onSubmit={createBook}
                            >
                                {(props) => (
                                    <div>
                                        <Card>
                                            <Form onSubmit={props.handleSubmit}>
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
                                                    <Box
                                                        sx={{
                                                            width: '100%',
                                                            display: 'flex',
                                                            justifyContent:
                                                                'center',
                                                        }}
                                                    >
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
                                                                        handleChangeAuthor
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
                                                                        handleChangeAuthor
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
                                                        </Grid>
                                                    </Box>
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
                                    </div>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Librarian;
