import {SET_USER} from '../actions/userActions';

const userReducer = (state = {value: null}, action) => {
    switch (action.type) {
        case SET_USER:
            const user = action.payload
            return {...state, value: user };
        default:
            return {...state};
    }
};

export default userReducer;
