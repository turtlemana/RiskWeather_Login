
import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';
export const User = createContext();

const res=await fetch(`http://localhost:3000/api/auth/getUser`)

const initialState={
    user:Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {}
}