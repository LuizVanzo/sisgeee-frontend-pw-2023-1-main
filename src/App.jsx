import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './componentes/telas/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './componentes/telas/login/Login'
import MenuPublico from './componentes/MenuPublico'
import MenuPrivado from './componentes/MenuPrivado'
import Marca from './componentes/telas/marca/Marca'
import Modelo from './componentes/telas/modelo/Modelo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<MenuPublico />}  >
          <Route index   element={<Home />} />
          <Route exact="true" path="/login" element={<Login />} />
        </Route>

        <Route  path="/privado" element={<MenuPrivado />}  >
          <Route index   element={<Home />} />
          <Route exact="true" path="marcas" element={<Marca />} />
          <Route exact="true" path="modelos" element={<Modelo />} />
          <Route exact="true" path="login" element={<Login />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
