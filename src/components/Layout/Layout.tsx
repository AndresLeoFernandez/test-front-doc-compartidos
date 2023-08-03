import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from '../../assets/logo.png';


function Layout() {
  return (
    <>
        <header>          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src={logo} className='app-logo' alt='Logo'/>
            <a className="navbar-brand" href="#">Proyectos Colaborativos</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><CustomLink to="/" className='nav-link'>Inicio</CustomLink></li>
                <li className="nav-item"><CustomLink to="/Api" className='nav-link'>Api</CustomLink></li>
                <li className="nav-item"><CustomLink to="/Docs" className='nav-link'>Docs</CustomLink></li>
                <li className="nav-item"><CustomLink to="/Contacto" className='nav-link'>Contacto</CustomLink></li>
                <li className="nav-item"><CustomLink to="/Registro" className='nav-link'>Registrate</CustomLink></li>
              </ul>
            </div>
          </div>
          </nav>
        </header>
        <main>    
          <div className="container-fluid">    
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8"><Outlet /></div>
              <div className="col-2"></div>
            </div>
          </div>
        </main>
        <footer className="py-5 bg-light">
          <div className="text-center">    
            <p><b>Copyright 2023</b></p>
          </div>      
        </footer>
    </>
  )
}

export default Layout

