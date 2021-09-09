import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    loggedIn: false,
    registered: false
}

export const user = createSlice({
    name:"user",
    initialState: INITIAL_STATE,
    reducers:{
        register : (state,action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        login: (state,action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: () => {
            return INITIAL_STATE;
        },
    },
});
export const {register,login,logout} = user.actions;

export const selectUser = (state) => state.user;

export default user.reducer;