import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'myToken',
    initialState : {
        value : ''
    },
    reducers : {
        tokenDetails : (state, action) =>{
            console.log(action.payload)
            state.value = {token : action.payload}
        },
        deleteToken : (state,action) =>{
            state.value = ''
        }
    }
})

export const {tokenDetails, deleteToken} = slice.actions;
export default slice.reducer;