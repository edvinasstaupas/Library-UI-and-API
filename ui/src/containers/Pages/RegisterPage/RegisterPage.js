import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from "react";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";
import {resetNewUser} from "../../../state/NewUser/NewUserActions";
import RegisterFinish from "./RegisterFinish";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(state => state.user)
    const [step, setStep] = useState(1);

    useEffect(() => {
        dispatch(resetNewUser())
        if (state.loggedInUser == null) {
            history.push("/");
        }
    }, [dispatch, history, state])

    return (
        <>
            {
                step === 1 ?
                    < Register1 step={step} setStep={setStep}/>
                    : step === 2 ?
                        <Register2 step={step} setStep={setStep}/>
                        : step === 3 ? <Register3 step={step} setStep={setStep}/> :
                            <RegisterFinish/>
            }
        </>
    )
}

export default RegisterPage;
/*

    const postLogin = (loginData, helper) => {
        login(loginData)
            .then(({data: userResponseDto, headers: {authorization}}) => {
                dispatch(
                    setLogin({
                        loggedInUser: userResponseDto,
                        jwt: authorization,
                    })
                );

                history.goBack();
            })
            .finally(() => helper.setSubmitting(false));
    };

    return (
        <>
            <Formik
                initialValues={{
                    userNumber: '',
                    password: '',
                }}
                onSubmit={postLogin}
            >
                {(props) => (
                    <Container maxWidth="sm">
                        <Paper elevation={10}>
                            <Box p={3}>
                                <Grid
                                    align="center"
                                    container
                                    justify="center"
                                    alignItems="center"
                                >
                                    <h1>Register</h1>
                                </Grid>
                                <Form onSubmit={props.handleSubmit}>
                                    <div>

                                        <hr style={{
                                            color: "black",
                                            backgroundColor: "black",
                                            height: 1
                                        }}/>



                                        <hr style={{
                                            color: "black",
                                            backgroundColor: "black",
                                            height: 1
                                        }}/>


                                    </div>
                                    <Box p={3}>
                                        <Grid
                                            align="center"
                                            container
                                            justify="center"
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
                                                        Login
                                                    </Button>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    Already have an account?{' '}
                                    <Button component={NavLink} to="/login">
                                        Register
                                    </Button>
                                </Form>
                            </Box>
                        </Paper>
                    </Container>
                )}
            </Formik>
        </>
    );
};
*/