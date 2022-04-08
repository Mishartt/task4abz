import React from "react";
import DefaultBtn from "./UI/Buttons/DefaultBtn";

const HelloBox = () => {

    return(
        <div className="HelloBox">
            
            <div className="dark__layer">
                    <div className="main__inf">
                        <h2>
                            Test assignment for front-end developer
                        </h2>
                        <p>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                        </p>
                        
                        <DefaultBtn text={'Sign up'}/>
                    </div>
            </div>
        </div>
    )
}


export default HelloBox