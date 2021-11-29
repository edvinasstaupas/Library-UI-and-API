import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {register} from "../../../api/apiEndpoints";

const RegisterFinish = () => {

    const history = useHistory();
    const state = useSelector(state => state.newUser)

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
                console.log(responseData)
            })
            .catch((error) => {console.log(error)})
    }, [state])

    return (
        <>
        </>
    )
};

export default RegisterFinish;