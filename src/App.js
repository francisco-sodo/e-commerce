import "./App.css"
import "bulma/css/bulma.css";
import "boxicons/css/boxicons.min.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Error from './components/Error/Error';
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";



function App(){
    return(
        <div className="app-style">
            <BrowserRouter>

                <NavBar/>
        
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a MyBrand"}/>} />
                    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                    <Route path="*" element={<Error/>} />

                    <Route path="/cart" element={<Cart/>} />

                </Routes>

                <Footer/>
            
            </BrowserRouter>
        </div>
        
    )
}


export default App;