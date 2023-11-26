//rafce
import "bulma/css/bulma.css";
import "boxicons/css/boxicons.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Error from './pages/Error';
import Footer from "./components/Footer/Footer";



function App(){
    return(
        <BrowserRouter>

            <NavBar/>
    
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a MyBrand"}/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="*" element={<Error/>} />
            </Routes>

            <Footer/>
           
        </BrowserRouter>
        
    )
}


export default App;