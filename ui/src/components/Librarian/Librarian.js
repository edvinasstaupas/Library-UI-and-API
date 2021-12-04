import * as React from 'react';
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
    makeStyles,
    OutlinedInput,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../StyledItems';

const useStyle = makeStyles({
    ul: { margin: 0, padding: 0, listStyle: 'none' },
});

const Librarian = () => {
    const classes = useStyle();
    const history = useHistory();

    const searchByUserNumber = (data, helper) => {
        helper.setSubmitting(false);
        const userNumber = data.userNumber;
        history.push('/user/' + userNumber + '/copies');
    };

    return (
        <>
            <CssBaseline />
            <Formik
                initialValues={{
                    userNumber: '',
                }}
                onSubmit={searchByUserNumber}
            >
                {(props) => (
                    <Container component="main" maxWidth={false}>
                        <Grid
                            container
                            spacing={4}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item key={1} xs={12} sm={10} md={4}>
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
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode ===
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
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Grid item xs={4}>
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
                                                            as={OutlinedInput}
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
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {props.isSubmitting ? (
                                                    <span>Submiting...</span>
                                                ) : (
                                                    <PrimaryButton type="submit">
                                                        Search
                                                    </PrimaryButton>
                                                )}
                                            </Box>
                                        </CardActions>
                                    </Form>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                )}
            </Formik>
        </>
    );
};

export default Librarian;
