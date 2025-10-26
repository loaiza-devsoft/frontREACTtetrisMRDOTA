import React from 'react'
import "./navbar.css"
import iconoOficial from "./../../../assets/iconoOficial.png"
import colombiaBandera from "./../../../assets/bandera-colombia.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom'
import ButtonHome from '../buttonHome/ButtonHome';

export default function Navbar() {
    return (
        <nav className='navbar__nav'>
            <div className="navbar__container-logo">
                <img className='navbar__img-icono' src={iconoOficial} alt="" />
            </div>

            <div className="navbar__container-links">
                <ul className='navbar__ul'>
                    <li className='navbar__li'><Link className='navbar__link' to={"/inicio"}>INICIO</Link></li>
                    <li className='navbar__li'><Link className='navbar__link' to={"/menu"}>MENU</Link></li>
                    <li className='navbar__li'><Link className='navbar__link' to={"/promociones"}>PROMOCIONES</Link></li>
                    <li className='navbar__li'><Link className='navbar__link' to={"/contactanos"}>CONTACTANOS</Link></li>
                    <li className='navbar__li'><ButtonHome linkRedireccion='/login' textoButton='Iniciar sesion'/></li>
                </ul>
            </div>

            <div className="navbar__container-lenguaje">
                <button className='navbar__button-lenguaje'>
                    <img className='navbar__img-colombia' src={colombiaBandera} alt="" />
                    <p className='navbar__p'>ES</p>
                    <IoMdArrowDropdown size={27} />
                </button>
            </div>


        </nav>
    )
}
