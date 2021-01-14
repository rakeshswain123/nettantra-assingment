import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';



const Navbar =() => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">NetTantra</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/signin"><FontAwesomeIcon icon={faSignInAlt} /> Signin</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/signup"><FontAwesomeIcon icon={faUserPlus} /> Signup</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</NavLink>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;