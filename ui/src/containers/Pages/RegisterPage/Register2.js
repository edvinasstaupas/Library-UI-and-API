import {Box, Button, Container, FormControl, Grid, InputLabel, OutlinedInput, Paper} from "@material-ui/core";
import {Field, Form, Formik} from 'formik';
import {useDispatch} from "react-redux";
import {setSecondStepInfo} from "../../../state/NewUser/NewUserActions";

const Register2 = (step) => {

    const dispatch = useDispatch();

    const nextStep2 = (data, helper) => {
        dispatch(setSecondStepInfo(data));
        helper.setSubmitting(false);
        step.setStep(3);
    }

    return (
        <>
            <Formik
                initialValues={{
                    city: "",
                    street: "",
                    house: "",
                }}
                onSubmit={nextStep2}
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
                                    <h1>Address</h1>
                                </Grid>
                                <Form onSubmit={props.handleSubmit}>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="city">
                                            City
                                        </InputLabel>
                                        <Field
                                            id="city"
                                            name="city"
                                            label="Your city"
                                            as={OutlinedInput}
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="street">
                                            Street
                                        </InputLabel>
                                        <Field
                                            id="street"
                                            name="street"
                                            label="Your street"
                                            as={OutlinedInput}
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="house">
                                            House number
                                        </InputLabel>
                                        <Field
                                            id="house"
                                            name="house"
                                            label="Your house number"
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

export default Register2;