import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            {year} © Dunder Mifflin Infinity Inc.
        </div>
    );
}

export default Footer;
