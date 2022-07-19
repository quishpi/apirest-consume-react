import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Escritorio from "./components/Escritorio";
import CabeceraLista from "./components/CabeceraLista";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Escritorio />}></Route>
          <Route path='/cabecera' element={<CabeceraLista />}></Route>
          <Route path='/cabecera/:id' element={<Cabecera />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
