import React from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Login from './Login'
import AddProducts from './AddProducts'
import Services from './Services'
import Card from './Card'

function Navbar(props) {
        

    function pleaseLogout(){
        console.log(window)
        window.location.pathname = '/login'
    }
    return (
      <BrowserRouter>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ecommerce App</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {console.log(props.initial)}
                            {props.initial ? <>
                                <li className="nav-item">
                                <Link to="/home" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add" className="nav-link">Add Products</Link>
                                </li>
                                <li><button className="btn btn-outline-light" onClick={pleaseLogout}>Logout</button></li>
                            </> : 
                            <li>
                                <Link to='/login' className='nav-link'>Login</Link>
                            </li>}
                            <button type="button" id="mypopover" className="btn btn-secondary" data-html="true" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamussagittis lacus vel augue laoreet rutrum faucibus.">
                                Cart
                            </button>   
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <Routes>
            <Route path="/home" element={<Card/>}></Route>
            <Route path="/add" element={<AddProducts/>}></Route>
            <Route path="/login" element={<Login info={props.data}/>}></Route>
            <Route path="'/services" element={<Services/>}></Route>
        </Routes>
    </BrowserRouter>
  )
  
}

export default Navbar