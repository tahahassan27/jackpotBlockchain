import React, { useState } from 'react';
import './adminLogin.css'

import { ethers } from "ethers";
import axios from 'axios'
function AdminLogin() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [Response, setResponse] = useState('');
  const [notification, setNotification] = useState(false);
  const handleRegistration= async (event)=>{
    event.preventDefault();
    try
    {
        if(window.ethereum && window.ethereum.isMetaMask){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", []);
            const balance = await provider.getBalance(accounts[0]);
            const balanceInEther = ethers.utils.formatEther(balance);
            console.log('name',name);
            console.log('email',email);
            // const data= new FormData(event.target);
            axios.post(`http://localhost:5000/api/admin-login/${email}/${accounts[0]}`).then(res=>{
                setResponse(res.data);
                setNotification(true);
            });
        }
        else
        {
            // setWalletConnect(false);
        }        
    }
    catch(error)
    {
        console.log(error);
    }
}
  return(
    <div className='container' align='center'>
        <form onSubmit={handleRegistration}>
            <div className="form-group"  style={{width: "400px"}}> 
                {/* <label >Email Address</label> */}
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} title="Enter Valid Email Id" required pattern=".+@gmail\.com" size="30" name="email" className="form-control input" placeholder="Enter Email ID" />
            </div>
    
            <button type="submit"  className="btn btn-primary" > Log In </button>

        </form>
        {notification==true?<>{Response}</>:<></>}

        {/* <button className="btn btn-primary" onClick={handleParticipate}>Connect Meta Mask</button> */}
    </div>
)
}

export default AdminLogin;