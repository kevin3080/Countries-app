
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export const Navbar = () => {
    return (
        <header>
            <nav>
                <h2 className="logo">Where in the world</h2>
                <div className="switch_mode">
                    <DarkModeIcon/>
                    <h3>Dark Mode</h3>
                </div>
            </nav>
        </header>
    )
}
