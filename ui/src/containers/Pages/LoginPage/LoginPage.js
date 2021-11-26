import {Form, Formik, Field} from "formik"
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Paper,
} from "@material-ui/core";
import {login} from "../../../api/apiEndpoints"
import {NavLink, useHistory} from "react-router-dom";
import {setLogin} from "../../../state/User/UserActions";
import {useDispatch} from "react-redux";

const LoginPage = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const postLogin = (loginData, helper) => {
        login(loginData)
            .then(({data: userResponseDto, headers: {authorization}}) => {
                dispatch(
                    setLogin({
                        loggedInUser: userResponseDto,
                        jwt: authorization
                    })
                )

                history.push("/")
            })
            .finally(() => helper.setSubmitting(false))
    }

    return (
        <>
            <Formik initialValues={{
                userNumber: '',
                password: '',
            }}
                    onSubmit={postLogin}
            >
                {props =>
                    <Container maxWidth="sm">
                        <Paper elevation={10}>
                            <Box p={3}>
                                <Grid align="center" container justify="center" alignItems="center">
                                    <h1>Login</h1>
                                </Grid>
                                <Form onSubmit={props.handleSubmit}>
                                    <div>
                                        <FormControl fullWidth variant="outlined" margin="dense">
                                            <InputLabel htmlFor="username">User code</InputLabel>
                                            <Field id="username"
                                                   name="username"
                                                   label="Your user number"
                                                   as={OutlinedInput}/>
                                        </FormControl>

                                        <FormControl fullWidth variant="outlined" margin="dense">
                                            <InputLabel htmlFor="password">Password</InputLabel>
                                            <Field id="password"
                                                   name="password"
                                                   label="Your password"
                                                   type="password"
                                                   as={OutlinedInput}/>
                                        </FormControl>
                                    </div>

                                    <Box p={3}>
                                        <Grid align="center" container justify="center" alignItems="center">
                                            <Grid item>
                                                {props.isSubmitting ?
                                                    <span>Submiting...</span> :
                                                    <Button color="primary"
                                                            variant="contained"
                                                            type="submit">
                                                        Login
                                                    </Button>}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    Don't have an account? <Button component={NavLink} to="/register">Register</Button>
                                </Form>
                            </Box>
                        </Paper>
                    </Container>
                }
            </Formik>
        </>
    )
}

export default LoginPage
