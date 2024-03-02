import {configureStore} from '@reduxjs/toolkit'
import mySlice from './slice'
import Sign from './signSlice'
import tkn from './tokenSlice'

const store = configureStore({
    reducer : {
        productList : mySlice,
        signD : Sign,
        tok : tkn
    }
})

export default store;