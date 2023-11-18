//rafce
import "bulma/css/bulma.css";
import "boxicons/css/boxicons.min.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App(){
    return(
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos a MyBrand"}/>
            <ItemDetailContainer/>
        </div>
    )
}


export default App;