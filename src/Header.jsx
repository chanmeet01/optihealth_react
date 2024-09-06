import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="flex justify-between items-center w-full p-5">
            <Logo />
            <Navigation />
        </header>
    );
}

export default Header;