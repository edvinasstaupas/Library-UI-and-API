import {Field, Form, Formik} from 'formik';
import {Box, Button, Container, FormControl, Grid, InputLabel, OutlinedInput, Paper,} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {fetchBooksBySearch} from "../../api/apiEndpoints";
import {setBookList, setSearched} from "../../state/Books/BooksActions";

const SearchBar = () => {

    const dispatch = useDispatch();

    const postSearch = (searchData, helper) => {
        if (searchData.title === null) {
            searchData.title = "";
        }
        if (searchData.author === null) {
            searchData.author = "";
        }
        fetchBooksBySearch(searchData)
            .then((data) => {
                dispatch(setBookList({bookList: data.data, searched: true}))
            })
            .finally(() => {
                helper.setSubmitting(false)
            })
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    author: '',
                }}
                onSubmit={postSearch}
            >
                {(props) => (
                    <Container maxWidth="md">
                        <Paper>
                            <Box py={3} px={1}>
                                <Form onSubmit={props.handleSubmit}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={5}>
                                            <FormControl
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            >
                                                <InputLabel htmlFor="title">
                                                    Title
                                                </InputLabel>
                                                <Field
                                                    id="title"
                                                    name="title"
                                                    label="Title"
                                                    as={OutlinedInput}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControl
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            >
                                                <InputLabel htmlFor="author">
                                                    Author
                                                </InputLabel>
                                                <Field
                                                    id="author"
                                                    name="author"
                                                    label="Author"
                                                    as={OutlinedInput}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Grid
                                                align="center"
                                                container
                                                justify="center"
                                                alignItems="center"
                                            >
                                                <Grid item>
                                                    {props.isSubmitting ? (
                                                        <span>
                                                            Submiting...
                                                        </span>
                                                    ) : (
                                                        <Button
                                                            color="primary"
                                                            variant="contained"
                                                            type="submit"
                                                        >
                                                            Search
                                                        </Button>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Box>
                        </Paper>
                    </Container>
                )}
            </Formik>
        </>
    );
};

export default SearchBar;
