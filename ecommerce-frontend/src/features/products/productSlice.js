import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        addProduct: (state, action) => {
            const product = {
                id: nanoid,
                product: action.payload
            }
            state.products.push(product);
        }
    }

})

export const {addProduct} = productSlice.actions;

export default productSlice.reducer