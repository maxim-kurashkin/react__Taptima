import React from 'react';
import './app-header.css';
import logo from './img/logo.svg';
import ring from './img/ring.svg';
import quit from './img/quit.svg';
import free from './img/free.svg';


const AppHeader = () => {
    return (
        <div className="container__header">
            <div className="header">
                <div className="header__left">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <img className="header__logo"src={logo} alt={"logo"}/> 
                    <div className="header__prom">
                    <div className="header__prom-item">
                        <img className="free"src={free} alt={"free"}/>
                        <label className="label">See our PRO version for more design components & coded in React follow this link: <a className="label-link" href="https://devias.io/products/devias-kit-pro">https://devias.io/products/devias-kit-pro</a></label>
                    </div>
                </div>
                </div>
                <div className="header__right">
                    <img className="header__ring"src={ring} alt={"ring"}/>
                    <img className="header__quit"src={quit} alt={"quit"}/>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;