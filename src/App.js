import "bulma/css/bulma.css";
import "boxicons/css/boxicons.min.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App(){
    return(
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos a MyBrand"}/>
        </div>
    )
}


export default App;