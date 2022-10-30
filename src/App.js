import React from "react";
import Home from "./component/Home.js";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Cart from "./component/Cart.js";
import { Provider } from "react-redux";
import Navbar from "./component/Navbar.js";
import Store from "./store/Store.js";

function App() {
 
  return (
    <Provider store={Store}>
        <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
 
    );
}

export default App;
