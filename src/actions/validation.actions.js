import {validationConstants} from '../constants';

export const validationActions = {
    clear,
    apiError
};

function clear(name) {
    return {
        type: validationConstants.CLEAR,
        name
    }
}

function apiError(messages) {
    return {
        type: validationConstants.APIERROR,
        messages
    }
}
