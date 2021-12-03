import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Register1 from './Register1';
import Register2 from './Register2';
import Register3 from './Register3';
import { resetNewUser } from '../../../state/NewUser/NewUserActions';
import RegisterFinish from './RegisterFinish';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => state.user);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (state.loggedInUser != null) {
            history.push('/');
        }
        dispatch(resetNewUser());
    }, [dispatch, history, state]);

    return (
        <>
            {step === 1 ? (
                <Register1 step={step} setStep={setStep} />
            ) : step === 2 ? (
                <Register2 step={step} setStep={setStep} />
            ) : step === 3 ? (
                <Register3 step={step} setStep={setStep} />
            ) : (
                <RegisterFinish />
            )}
        </>
    );
};

export default RegisterPage;
