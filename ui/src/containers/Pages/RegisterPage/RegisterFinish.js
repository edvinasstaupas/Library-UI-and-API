import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { register } from '../../../api/apiEndpoints';
import { Box, makeStyles } from '@material-ui/core';
import { PrimaryOutlinedButton } from '../../../components/StyledItems';
import handleError from '../../../components/errors';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '70vh',
        justifyContent: 'center',
    },
});

const RegisterFinish = () => {
    const state = useSelector((state) => state.newUser);
    const [user, setUser] = useState({});

    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        register({
            firstName: state.firstStepInfo.firstName,
            lastName: state.firstStepInfo.lastName,
            address: {
                city: state.secondStepInfo.city,
                street: state.secondStepInfo.street,
                houseNumber: state.secondStepInfo.house,
            },
            password: state.thirdStepInfo.password,
            password2: state.thirdStepInfo.password2,
        })
            .then((responseData) => {
                setUser(responseData.data);
            })
            .catch((error) => history.push(handleError(error.response)));
    }, [history, state]);

    return (
        <>
            <Box className={classes.box}>
                <h1>Your user number is {user.userNumber}</h1>
                <h2>
                    Please{' '}
                    <PrimaryOutlinedButton
                        to="/login"
                        type="submit"
                        component={NavLink}
                    >
                        Login
                    </PrimaryOutlinedButton>
                </h2>
            </Box>
        </>
    );
};

export default RegisterFinish;
