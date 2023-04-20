import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/menu'
import Home from './componentes/telas/home'
import Marca from './componentes/telas/marca/Marca'
import Modelo from './componentes/telas/modelo/Modelo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact="true" path="/" element={<Home/>}/>  
        <Route exact="true" path="/marcas" element={<Marca/>}/>
        <Route exact="true" path="/modelos" element={<Modelo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
