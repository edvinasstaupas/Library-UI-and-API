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
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { PrimaryButton } from '../../../components/StyledItems';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dateFnsFormat from 'date-fns/format';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import LibrarianSecurity from '../../../components/Librarian/LibrarianSecurity';

const LibrarianUserSearch = () => {
    const history = useHistory();

    const searchByUserNumber = (data, helper) => {
        helper.setSubmitting(false);
        const userNumber = data.userNumber;
        history.push('/user/' + userNumber + '/copies');
    };

    return (
        <>
            <LibrarianSecurity />
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
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default LibrarianUserSearch;
