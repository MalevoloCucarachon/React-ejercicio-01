import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h3 className="copyright">© Copyright. All rights reserved.</h3>
            <ul className="social-nets">
                <li>
                    <a href="#">Linked In</a>
                </li>
                <li>
                    <a href="#">GitHub</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer