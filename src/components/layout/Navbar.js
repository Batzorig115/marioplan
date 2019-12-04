import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper.gret.darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;