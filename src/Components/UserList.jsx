import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";

const UserList = ({success}) => {

    const [users,setUsers] = useState();
    const [page,setPage] = useState(2);
    const [morePages,setMorePages] = useState(true);


    useEffect(() => {
      try{
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`).then(resp => setUsers(resp.data.users))
        setPage(2)
      }catch(e){
        alert(e)
      }
    },[success])

    
   
    useEffect(() => {
     
      if(users !== undefined&&users.length <6){
         setMorePages(false)
         console.log('asd');
      }else{
        setMorePages(true)
      }
     
    },[users])
   

    const showMore = () => {
      
      try{
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`).then(resp => setUsers(resp.data.users))
        setPage(page+1);
      }catch(e){
        alert(e)
      }
      
    }

    return(
        <div className="users__container">
                {
                users ? 
                users.map(user => 
                      <UserItem key={user.id} user={user}/>
                 )
                 :
                 <div className="loading__page">
                        <div class="preloader"><div></div><div></div><div></div><div></div></div>
                 </div>
              }

            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
              <div style={{display:morePages ? '':'none'}} onClick={showMore} className="showMore__btn">
                <p>Show more</p>
              </div>
            </div>
        </div>
         
    )
}

export default UserList