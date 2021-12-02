import {Box, Button, Container, FormControl, Grid, InputLabel, OutlinedInput, Paper} from "@material-ui/core";
import {Field, Form, Formik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {register} from '../../../api/apiEndpoints';
import {setThirdStepInfo} from "../../../state/NewUser/NewUserActions";

const Register3 = (step) => {

    const dispatch = useDispatch();

    const nextStep3 = (data, helper) => {
        dispatch(setThirdStepInfo(data));
        helper.setSubmitting(false);
        step.setStep(4);
    }

    return (
        <>
            <Formik
                initialValues={{
                    password: "",
                    password2: "",
                }}
                onSubmit={nextStep3}
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
                                    <h1>Password</h1>
                                </Grid>
                                <Form onSubmit={props.handleSubmit}>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="password">
                                            Password
                                        </InputLabel>
                                        <Field
                                            id="password"
                                            name="password"
                                            label="Your password"
                                            type="password"
                                            as={OutlinedInput}
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="dense"
                                    >
                                        <InputLabel htmlFor="password2">
                                            Confirm password
                                        </InputLabel>
                                        <Field
                                            id="password2"
                                            name="password2"
                                            label="Confirm password"
                                            type="password"
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

export default Register3;