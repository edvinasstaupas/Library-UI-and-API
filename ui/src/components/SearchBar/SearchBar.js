import { Field, Form, Formik } from 'formik';
import {
    Box,
    Container,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Paper,
} from '@material-ui/core';
import { PrimaryButton } from '../StyledItems';

const SearchBar = (props) => {
    const postSearch = props.postSearch;

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
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Grid item>
                                                    {props.isSubmitting ? (
                                                        <span>
                                                            Submiting...
                                                        </span>
                                                    ) : (
                                                        <PrimaryButton type="submit">
                                                            Search
                                                        </PrimaryButton>
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
