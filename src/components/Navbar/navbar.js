import React from 'react';
import classNames from 'classnames';

export default function Navbar({ className }) {
    return (
        <div className={classNames('navbar', {
            [className]: className
        })}>
            <div className='container'>
                <div className='navbar__content'>
                    <a href='/'>
                        <img className='navbar__logo' src='/logo.svg' alt='logo' />
                    </a>
                    <div className='navbar__contact'>
                        <span className='navbar__contact-pretext'>¿Tienes alguna duda?</span>
                        <img className='navbar__contact-logo' src='/ic_phone.png' alt='contacto-logo' />
                        <span className='navbar__contact-text navbar__contact-text-1'>Llámanos</span>
                        <span className='navbar__contact-text navbar__contact-text-2'>(01) 411 6001</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
