import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                    <img className='navbar__logo' src='/logo.svg' alt='logo' />
                    <div className='navbar__contact'>
                        <img className='navbar__contact-logo' src='/ic_phone.png' alt='contacto-logo' />
                        <span className='navbar__contact-text'>Llámanos</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
