import React from 'react'
import Logo from '../../assets/troll-face.png'

export default function Header(){
    return (
        <>
            <header className="head-container">
                <div className="logo-container">
                    <img className="header-logo" src={Logo} alt="" />
                    <h2 className="header-title">Meme Generator</h2>
                </div>
                <h4 className="header-project">React Project #3</h4>
            </header>
        </>
    )
}