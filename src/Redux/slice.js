import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'mySlice',
    initialState : {
        value : []
    },
    reducers : {
        allProducts : (state, action) =>{
            state.value = [...state.value, ...action.payload]
        },
        addProduct : (state, action) =>{
            let index = state.value.length
            let img = 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG'
            let newObj = {...action.payload, id: index+1, variation:[{...action.payload.variation[0], productImage:img}]}
            state.value = [...state.value, newObj]
            // console.log(newObj)
            // console.log(state.value)
        },
        updateProduct : (state,action) =>{
            let ob = action.payload;
            console.log(state.value)
            console.log(ob)
            state.value = state.value.map(p=>p.id===ob.id?{...ob, productName:ob.productName, category:ob.category, status:ob.status, variation:p.variation.map(e=>e.productImage===p.variation[0].productImage?{...e, price:ob.variation[0].price, stock:ob.variation[0].stock}:p.variation)}:p)
            // console.log(state.value)
        },
        delProducts : (state, action) =>{
            let id = action.payload
            state.value = state.value.filter(p=>p.id!==id)
        }
    }
})

export const {allProducts,addProduct,updateProduct ,delProducts} = slice.actions;
export default slice.reducer;