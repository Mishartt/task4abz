import React from "react";

const UserItem = ({user}) => {
    

    return(
        <div className="user__item">
            <img src={user.photo}/>
             <p className="user__name">{user.name}</p>
                <p>{user.position}</p>

               <div><p className="user__email">{user.email.length > 25 ? `${user.email.substring(0,25)}...` : user.email}</p>
                    <div style={{display:user.email.length > 25 ? '' : 'none'}} className="full__email">
                        <p>{user.email}</p>
                    </div>
               </div>

                <p>{user.phone}</p>
        </div>
    )
}


export default React.memo(UserItem)