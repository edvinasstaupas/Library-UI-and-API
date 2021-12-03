import {
    FIRSTSTEP,
    RESET_NEW_USER,
    SECONDSTEP,
    THIRDSTEP,
} from './NewUserModel';

export const setFirstStepInfo = (firstStepInfo) => ({
    type: FIRSTSTEP,
    firstStepInfo,
});

export const setSecondStepInfo = (secondStepInfo) => ({
    type: SECONDSTEP,
    secondStepInfo,
});

export const setThirdStepInfo = (thirdStepInfo) => ({
    type: THIRDSTEP,
    thirdStepInfo,
});

export const resetNewUser = () => ({
    type: RESET_NEW_USER,
});
