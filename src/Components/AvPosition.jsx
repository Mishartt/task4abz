import React from "react";

const AvPostition = ({ps,enter}) => {

    return(
        <div className="position__item">
            <label className="label">
                <input value={ps.id} onChange={e => enter(e.target.value)} type="radio" name="radio"/>
                    <div className="ch__box">
                        <div className="dot"></div>
                    </div>
			            <p>{ps.name}</p>
            </label>
        </div>
    )
} 


export default AvPostition