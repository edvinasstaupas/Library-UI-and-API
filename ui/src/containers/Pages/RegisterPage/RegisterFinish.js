import {useSelector} from "react-redux";
import {NavLink, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {register} from "../../../api/apiEndpoints";
import {Button} from "@material-ui/core";

const RegisterFinish = () => {

    const state = useSelector(state => state.newUser)
    const [user, setUser] = useState({});

    useEffect(()=> {
        register({
            firstName: state.firstStepInfo.firstName,
            lastName: state.firstStepInfo.lastName,
            address: {
                city: state.secondStepInfo.city,
                street: state.secondStepInfo.street,
                houseNumber: state.secondStepInfo.house
            },
            password: state.thirdStepInfo.password,
            password2: state.thirdStepInfo.password2
        })
            .then((responseData) => {
                setUser(responseData.data)
            })
            .catch((error) => {console.log(error)})
    }, [state])

    return (
        <>
            <h1>Your user number is {user.userNumber}</h1>
            <h2>Please
                <Button
                    to="/login"
                    color="primary"
                    variant="contained"
                    type="submit"
                    component={NavLink}
                >
                    Login
                </Button>
            </h2>
        </>
    )
};

export default RegisterFinish;