import React from "react";
import cl from './DefaultBtn.module.scss'

const DefaultBtn = ({text,disabled,send}) => {

    return(
        <div onClick={send} style={{color : disabled ? 'white' : '',backgroundColor:disabled? '#B4B4B4':''}} className={cl.DefaultBtn}>
            {text} 
        </div>
    )
}

export default DefaultBtn