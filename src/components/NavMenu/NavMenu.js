import React from 'react';
import { Link } from "react-router-dom"
import Styles from './NavMenu.module.css' 

const NavMenu = () => {

    

    return (

        <div className={Styles.conteiner}>
            <Link to='/' className={Styles.navLink} >Home work1</Link>
            <Link to='/hw2' className={Styles.navLink}>Home work2</Link>
            <Link to='/hw3' className={Styles.navLink}>Home work3</Link>
        </div>
    )
}

export default NavMenu;