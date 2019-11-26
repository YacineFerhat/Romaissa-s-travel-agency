import React , {useState} from 'react';
import Logo from './Logo.png'
const Navbar = () => {
    const [toggle, handleToggle] =  useState(false)
    return(
        <nav className="navbar is-transparent is-fixed-top" style={{backgroundColor:'white'}} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <figure className=" navbar-item image">
                    <img style={{height:'100%', width:'100px'}} src={Logo} />
                </figure>
               
                <a role="button" onClick={()=>handleToggle(!toggle)} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            {
                toggle ? 
                        
                <div className={`navbar-menu ${toggle ? 'is-active': null}`} id="navMenu">
                    <a href="#valeur" className="navbar-item">
                        <h1 className="title is-6">
                        Nos valeurs

                        </h1>
                    </a>
                    <a href="#contact" className="navbar-item">
                        <h1 className="title is-6">
                            Contact

                        </h1>
                    </a>
                </div>
                : null
            }
            <div id="navbarBasicExample" class="navbar-menu">
                <div className="navbar-end">
                    <a href="" className="navbar-item">
                        <h1 className="title is-6">
                        Nos valeurs

                        </h1>
                    </a>
                    <a href="" className="navbar-item">
                        <h1 className="title is-6">
                            Contact

                        </h1>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;