import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: any[];
  totalAmount: number;
  page: number;
  nextPage: number | null;
}
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  page: 1,
  nextPage: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddToCart(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
    }
  }
});

export const { setAddToCart } = cartSlice.actions;
export default cartSlice.reducer;



// import React, { useEffect, useState } from "react";
// import { 
//   useSignUpMutation, 
//   useSignInMutation 
// } from "../services/loginApi";
// import { 
//   useGetCartQuery, 
//   useAddToCartMutation, 
//   useDeleteCartMutation 
// } from "../services/cartApi";
// import { useAppDispatch, useAppSelector } from "../store/store";
// import { setCart, addToCart, removeFromCart } from "../state/cartSlice";

// const AuthCartPage = () => {
//   const dispatch = useAppDispatch();
  
//   // 🔹 API chaqiruvlari
//   const [signUp] = useSignUpMutation();
//   const [signIn] = useSignInMutation();
//   const { data: cartData } = useGetCartQuery();
//   const [addToCartApi] = useAddToCartMutation();
//   const [deleteCartApi] = useDeleteCartMutation();
  
//   // 🔹 Local state
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   // 🔹 Redux state
//   const cart = useAppSelector((state) => state.cart);

//   // 🔹 Get Cart malumotlarini Redux state'ga yuklash
//   useEffect(() => {
//     if (cartData) {
//       dispatch(setCart(cartData));
//     }
//   }, [cartData, dispatch]);

//   // 🔹 SignUp (Ro'yxatdan o'tish)
//   const handleSignUp = async () => {
//     try {
//       const res = await signUp({ email, password }).unwrap();
//       console.log("SignUp Success:", res);
//     } catch (err) {
//       console.error("SignUp Error:", err);
//     }
//   };

//   // 🔹 SignIn (Kirish)
//   const handleSignIn = async () => {
//     try {
//       const res = await signIn({ email, password }).unwrap();
//       console.log("SignIn Success:", res);
//     } catch (err) {
//       console.error("SignIn Error:", err);
//     }
//   };

//   // 🔹 Add to Cart
//   const handleAddToCart = async (item: any) => {
//     try {
//       await addToCartApi(item).unwrap();
//       dispatch(addToCart(item));
//     } catch (err) {
//       console.error("AddToCart Error:", err);
//     }
//   };

//   // 🔹 Delete from Cart
//   const handleDeleteCart = async (id: string) => {
//     try {
//       await deleteCartApi(id).unwrap();
//       dispatch(removeFromCart(id));
//     } catch (err) {
//       console.error("DeleteCart Error:", err);
//     }
//   };

//   return (
//     <div>
//       {/* 🔹 Auth Section */}
//       <h2>Authentication</h2>
//       <input 
//         type="email" 
//         placeholder="Email" 
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)} 
//       />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//       <button onClick={handleSignIn}>Sign In</button>

//       {/* 🔹 Cart Section */}
//       <h2>Cart</h2>
//       {cart.items.map((item) => (
//         <div key={item.id}>
//           <p>{item.name} - ${item.price}</p>
//           <button onClick={() => handleDeleteCart(item.id)}>Remove</button>
//         </div>
//       ))}
      
//       {/* 🔹 Add to Cart Example */}
//       <button onClick={() => handleAddToCart({ id: "123", name: "New Item", price: 10 })}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default AuthCartPage;
