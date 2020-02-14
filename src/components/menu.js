import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

const Menu = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = (e) => {
        setOpen(!open)
        e.preventDefault()
    }

    return (
    <nav className="main">
        <a href="#" className="menu-trigger" onClick={toggleMenu}>
        Menu
        </a>
        <ul className={open ? "show" : ""}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        </ul>
    </nav>
    )
}

export default Menu