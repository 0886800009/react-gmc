import {
    SET_USER
} from '../actions/types';

export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});
