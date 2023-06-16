import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <h1>Rick and Morty</h1>
            <nav>
                <ul className='list-buttons'>
                    <li><a href="#">About me</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header