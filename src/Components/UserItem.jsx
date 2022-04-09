import React from "react";

const UserItem = ({user}) => {
    
   

    return(
        <div className="user__item">
            <img src={user.photo}/>
             <p className="user__name">{user.name}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
        </div>
    )
}


export default React.memo(UserItem)