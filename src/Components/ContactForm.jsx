import React, { createElement, useEffect, useState } from "react";
import AvPosition from './AvPosition'
import axios from "axios";
import DefaultBtn from "./UI/Buttons/DefaultBtn";



const ContactForm = ({setSuccess}) => {
    const [token,setToken] = useState('')

    const [positions,setPositions] = useState();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [position,setPosition] = useState('')
    const [img,setImg] = useState('')
    

    const [nameStatus,setNameStatus] = useState(true)
    const [emailStatus,setEmailStatus] = useState(true)
    const [phoneStatus,setPhoneStatus] = useState(true)
    const [positionStatus,SetPositionStatus] = useState(true)
    const [imgStatus,setImgStatus] = useState(true);
    const [btnStatus,setBtnStatus] = useState(true);


    useEffect(() => {
        if(nameStatus&&emailStatus&&phoneStatus&&positionStatus&&imgStatus&&img!==''){
            setBtnStatus(false)
        }else{
            setBtnStatus(true)
        }
    },[name,email,phone,position,img])

    const addFile =(e) => {
        // console.log(e.target.files[0].size/1048576);
        if(e.target.files[0].size/1048576 > 5){
            setImgStatus(false)
            return
        }else{
            setImgStatus(true)
            setImg(e.target.files[0])
        }
       
        const reader = new FileReader();
        reader.onload = ev => {
            // console.log(ev)
            let img = document.createElement('img');
            
            img.onload = () =>{
                if(img.width <70 || img.height < 70){
                    setImgStatus(false)
                    return
                }else{
                    setImgStatus(true)
                }
            }
            img.src = ev.target.result
        }
        reader.readAsDataURL(e.target.files[0])

        
    }

    
    

    const send = () => {
        
        if(name.length<2||name.length>60){
            setNameStatus(false)
        }else{
            setNameStatus(true)
        }

        if(email.length<2||email.length>100||!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(email)){
            setEmailStatus(false)
        }else{
            setEmailStatus(true)
        }

        if(!/^[\+]{0,1}380([0-9]{9})$/.test(phone)){
            setPhoneStatus(false)
        }else{
            setPhoneStatus(true)
        }
       
        if(position == ''){
           SetPositionStatus(false) 
        }else{
            SetPositionStatus(true)
        }

       
       let formData = new FormData();
       formData.append('position_id', position); 
       formData.append('name', name);
       formData.append('email', email);
       formData.append('phone', phone);
       formData.append('photo', img);

       if(btnStatus){
           fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
       {method: 'POST', body: formData, headers: 
        {'Token': token,},}).then(resp => {return resp.json() }).then(data => {console.log(data)
            if(data.success) {
                console.log('success')
                setSuccess(true);
            }else{
                 console.log('error') } }).catch(function(error) {console.log(error);})
       }
       
       
     

    }

    useEffect(() => {
        try{
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions').then(resp => setPositions(resp.data.positions))
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(resp => setToken(resp.data.token))
        }catch(e){
            console.log(e);
        }
    },[])


    return(
        <div className="contact__cotainer">
            <input style={{border:nameStatus ? '' : '#CB3D40 solid 2px'}} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" type="text" />
            <input style={{border:emailStatus ? '' : '#CB3D40 solid 2px'}} value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name="email"/>
            <input style={{border:phoneStatus ? '' : '#CB3D40 solid 2px'}} value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="Phone" type="tel"/>
                <div className="phone__exapmle">
                    +380 (XXX) XXX - XX - XX
                </div>

                <div className="available__positions">
                    <p style={{color:positionStatus?'':'#CB3D40'}}>Select your position</p>
                    {positions ? 
                    positions.map(ps => 
                        <AvPosition enter={setPosition} key={ps.id} ps={ps}/>
                        )
                        :
                        <div>
                            Loadaing...
                        </div>
                    }
                </div>

                <label className="lb" >
                <div style={{border:imgStatus ? '' : '#CB3D40 solid 2px'}} className="file__adder">
                   <input onChange={e => addFile(e)} accept=".jpg, .jpeg" type="file" />
                   
                    <div style={{borderRight:imgStatus ? '' : '#CB3D40 solid 2px'}} className="upload__btn">
                        Upload
                    </div>
                       
                        {img !== '' && imgStatus?
                            <p style={{color:'black'}}>Item</p>
                            :
                             <p>Upload your photo</p>
                        }
                    </div>
                </label>

                <DefaultBtn send={send} disabled={btnStatus} text={'Sign Up'}/>

        </div>
    )
}

export default ContactForm