import {FIRSTSTEP, RESET_NEW_USER, SECONDSTEP, THIRDSTEP} from './NewUserModel';

const newUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FIRSTSTEP:
            return {
                ...state,
                firstStepInfo: action.firstStepInfo
            };
        case SECONDSTEP:
            return {
                ...state,
                secondStepInfo: action.secondStepInfo
            };
        case THIRDSTEP:
            return {
                ...state,
                thirdStepInfo: action.thirdStepInfo
            };
        case RESET_NEW_USER:
            return initialUserState;
        default:
            return state;
    }
};

const initialUserState = {};

export default newUserReducer;
