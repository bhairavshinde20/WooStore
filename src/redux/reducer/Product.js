import { createSlice } from '@reduxjs/toolkit';



// import { createAsyncThunk } from "@reduxjs/toolkit";
// const fetchDataById = createAsyncThunk(
//   "data/fetchById",
//   async (id, { getState, dispatch }) => {
//     const state = getState();
//     // make a network call to fetch the data with the given ID
//     const response = await fetch(`https://parind.online/parind4/public/api/products/${id}`);
//     return response.json();
//   }
// );

export const cartSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    // currentProduct: null,

  },
  reducers: {
    ViewSingleProduct: (state, action) => {
      return { ...state, data: action.payload };
    },
    // setCurrentProduct: (state, action) => {
    //   state.currentProduct = state.data.find((p) => p.id === action.payload.id);
    // },
  },
});

// export const selectDataById = (state, id) => state.data.data[id];

export const { ViewSingleProduct } = cartSlice.actions;
export default cartSlice.reducer;
// export {fetchDataById}










// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://parind.online/parind4/public/api/" }),
//   endpoints: (builder) => ({
//     getAllProducts: builder.query({
//       query: () => "products",
//     }),
//     getProduct: builder.query({
//       query: (id) => `products/${id}`,
//     }),
//   }),
// });

// export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;





// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const fetchProductById = createAsyncThunk("products/fetchProductById", async (id) => {
//   const response = await fetch(`https://parind.online/parind4/public/api/products/${id}`);
//   return response.json();
// }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     entities: {},
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchProductById.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [fetchProductById.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.entities[action.payload.id] = action.payload;
//     },
//     [fetchProductById.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     },
//   },
// });

// export const { } = productSlice.actions;
// export default productSlice.reducer;
// export {fetchProductById}


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const fetchDataById = createAsyncThunk("data/fetchDataById", async (id) => {
//   const response = await axios.get(`https://parind.online/parind4/public/api/products/${id}`);
//   return response.data;
// });
// const dataSlice = createSlice({
//   name: "data",
//   initialState: {
//     data: [],
//     loading: false,
//     error: null
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchDataById.pending]: state => {
//       state.loading = true;
//     },
//     [fetchDataById.fulfilled]: (state, action) => {
//       state.data[action.payload.id];
//       state.loading = false;
//       state.error = null;
//     },
//     [fetchDataById.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error;
//     }
//   }
// });
// export const { } = dataSlice.actions;
// export default dataSlice.reducer;
// export { fetchDataById };






// import { createSlice } from '@reduxjs/toolkit';

// const dataSlice = createSlice({
//   name: 'items',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addData: (state, action) => {
//       state.items.push(action.payload);
//     },
//   },
// });

// export const { addData } = dataSlice.actions;
// export default dataSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   try {
//     const response = await fetch("https://parind.online/parind4/public/api/products");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// });

// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
//   currentProduct: null,
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     startLoading: (state) => {
//       state.loading = true;
//     },
//     receiveProducts: (state, action) => {
//       state.products = action.payload;
//       state.loading = false;
//     },
//     setCurrentProduct: (state, action) => {
//       state.currentProduct = state.products.find((p) => p.id === action.payload);
//     },
//     receiveError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export default productsSlice.reducer;
