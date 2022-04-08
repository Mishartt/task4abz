import React from "react";
import Img from '../assets/img/success-image.svg'
import Title from "./Title";

const Success = ({displ}) => {

    return(
        <div style={{display: displ ? 'flex' : 'none'}} className="success">
            <Title text={'User successfully registered'}/>
            <img src={Img} alt="success"/>
        </div>
    )
}


export default Success