import { Route, Routes } from 'react-router-dom';
import './App.css'
import Inicio from './components/Inicio/Inicio';
import Api from './components/Api/Api';
import Docs from './components/Docs/Docs';
import Contacto from './components/Contacto/Contacto';
import Registro from './components/Registro/Registro';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Inicio/>}/>
        <Route path="Api" element={<Api/>} />
        <Route path="Docs" element={<Docs/>} />
        <Route path="Contacto" element={<Contacto/>} />
      <Route path="/Registro" element={<Registro/>} />
      </Route>
    </Routes>
  )
}

export default App
