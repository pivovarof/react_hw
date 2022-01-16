import React from "react"
import { NavLink } from "react-router-dom"
import Styles from './NavMenu.module.css'

const NavMenu = () => {


    return (

        <div className={Styles.conteiner}>
            <NavLink to='/' className={Styles.navLink}>Home work1</NavLink>
            <NavLink to='/hw2' className={Styles.navLink}>Home work2</NavLink>
            <NavLink to='/hw3' className={Styles.navLink}>Home work3</NavLink>
            <NavLink to='/hw4' className={Styles.navLink}>Home work4</NavLink>
        </div>
    )
}

export default NavMenu;