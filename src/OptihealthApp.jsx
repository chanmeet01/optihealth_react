import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';

function OptihealthApp() {
    return (
        <div className="flex overflow-hidden relative flex-col items-start text-3xl font-bold text-black bg-white border border-black border-solid">
            <Header />
            <Hero />
            <Features />
        </div>
    );
}

export default OptihealthApp;