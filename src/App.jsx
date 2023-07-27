import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from "./componentes/ItemListContainer"


function App() {

  return(
    <> 
      <NavBar />
      <ItemListContainer greeting="Somos un Joyería que cuenta con 35 años de experiencia. Nuestro
                principal objetivo es entregar a nuestros clientes productos de
                calidad y una cálida atención como se lo merecen"/>  

    </>
   
  )
      
}

export default App
