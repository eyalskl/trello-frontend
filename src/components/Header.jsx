import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header flex space-between align-center">
            <nav className="nav-left flex align-center">
                <NavLink activeClassName="active" exact to="/"> Home </NavLink>
                <NavLink activeClassName="active" exact to="/board"> Board </NavLink>
                <div className="input-container flex">
                    <input type="text" />
                    <button> Search </button>
                </div>
            </nav>
            <div className="logo">
                <NavLink activeClassName="active" exact to="/"> Trollolo </NavLink>
            </div>
            <nav className="nav-right">
                <button> User </button>
            </nav>
        </header>
    )
}

export default Header;
