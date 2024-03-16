import React from 'react';

import { Counter } from './features/counter/Counter';
import ProductList from './features/product-list/ProductList'
import Home from './pages/Home'
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/cart'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
]);

createRoot(document.getElementById("root")).render(
  
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
