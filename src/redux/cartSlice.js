import {createSlice} from "@reduxjs/toolkit";

const intialState={
    products:[],
    productsNumber:0,
}
export const cartSlice = createSlice({
    name:"cart",
    intialState,
    reducers:{
        addToCart:(state,action)=>{
            //check if in prduct array
            const addProductExists=state.products.find((product)=>product.id===action.payload.id);
            if(addProductExists){
                addProductExists.quantity+=parseInt(action.payload.quantity)
            }
            else{
                state.products.push({
                    ...action.payload,
                    quantity:parseInt(action.payload.quantity)

                })
            }
            state.productsNumber=state.productsNumber+parseInt(action.payload.quantity);
        }
    }
})