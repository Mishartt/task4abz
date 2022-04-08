import React from "react";
import logo from '../assets/img/Logo.svg'
import DefaultBtn from "./UI/Buttons/DefaultBtn.jsx";


const Header = () => {


    return(
        <header className="main__header">
            <div className="header__container">
                <img src={logo} alt="logo" />

                <div className="btn__box">
                    <DefaultBtn text={'Users'}/>
                    <DefaultBtn text={'Sign up'}/>
                </div>
            </div>
        </header>
    )
}

export default Header