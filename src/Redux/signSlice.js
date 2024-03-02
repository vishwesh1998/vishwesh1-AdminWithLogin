import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'mySignUp',
    initialState : {
        value : ''
    },
    reducers : {
        signDetails : (state, action) =>{
            state.value = action.payload
            console.log(state.value)
        }
    }
})

export const {signDetails} = slice.actions;
export default slice.reducer;