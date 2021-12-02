import {Box, Button, Container, FormControl, Grid, InputLabel, OutlinedInput, Paper} from "@material-ui/core";
import {Field, Form, Formik} from 'formik';
import {useDispatch} from "react-redux";
import {setFirstStepInfo} from "../../../state/NewUser/NewUserActions";

const Register1 = (step) => {

    const dispatch = useDispatch();

    const nextStep1 = (data, helper) => {
        dispatch(setFirstStepInfo(data));
        helper.setSubmitting(false);
        step.setStep(2);
    }

    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                }}
                onSubmit={nextStep1}
            >
                {(props) => (
                    <Container maxWidth="sm">
                        <Paper elevation={10}>
                            <Box p={3}>
                                <Grid
                                    align="center"
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <h1>First name and last name</h1>
                                </Grid>
                                <Form onSubmit={props.handleSubmit}>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="firstName">
                                            First name
                                        </InputLabel>
                                        <Field
                                            id="firstName"
                                            name="firstName"
                                            label="Your first name"
                                            as={OutlinedInput}
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="lastName">
                                            Last name
                                        </InputLabel>
                                        <Field
                                            id="lastName"
                                            name="lastName"
                                            label="Your last name"
                                            as={OutlinedInput}
                                        />
                                    </FormControl>
                                    <Box p={3}>
                                        <Grid
                                            align="center"
                                            container
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Grid item>
                                                {props.isSubmitting ? (
                                                    <span>Submiting...</span>
                                                ) : (
                                                    <Button
                                                        color="primary"
                                                        variant="contained"
                                                        type="submit"
                                                    >
                                                        Next step
                                                    </Button>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Form>
                            </Box>
                        </Paper>
                    </Container>
                )}
            </Formik>
        </>
    )
};

export default Register1;