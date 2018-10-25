import { validationConstants } from '../constants';

export function validation(state = {}, action) {
    switch (action.type) {
        case validationConstants.CLEAR: {
            const {name} = action;

            if(name && state[name]) {
                let stateCopy = {
                    ...state
                }

                delete stateCopy[name];
                return stateCopy;
            }

            return {};
        }
        case validationConstants.APIERROR: {
            return action.messages;
        }
        default: {
            return state;
        }
    }
}