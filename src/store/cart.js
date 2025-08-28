import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            } else {
            state.items.push({productId, quantity})
            }
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0) {
                state.items[indexProductId].quantity = quantity
            } else {
                state.items.splice(indexProductId, 1);
            }
        },
         clearCart(state) {
            state.items = [];
        },

    }
})

export const { addToCart, changeQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer;