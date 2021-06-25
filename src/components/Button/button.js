import React from 'react';
import classNames from 'classnames';
import ClipLoader from "react-spinners/ClipLoader";

export default function Button({ as = 'button', text, className, href, onClick = () => { }, iconRight = null, loading = false }) {
    if (loading) {
        return (
            <button className={classNames('button', {
                [className]: className
            })}>
                <ClipLoader color='#FFFFFF' />
            </button>
        )
    } else {
        switch (as) {
            case 'button':
                return (
                    <button onClick={onClick} className={classNames('button', {
                        [className]: className
                    })}>
                        {text}
                        {iconRight && <img className='button__right-icon' src={iconRight} alt='button-icon' />}
                    </button>
                )
            default:
                return (
                    <a target='_blank' rel="noreferrer" href={href} className={classNames('button', {
                        [className]: className
                    })}>
                        {text}
                        {iconRight && <img className='button__right-icon' src={iconRight} alt='button-icon' />}
                    </a>
                )
        }
    }
}
