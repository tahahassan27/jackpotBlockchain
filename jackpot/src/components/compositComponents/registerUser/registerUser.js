import React, { useState } from 'react';
// import React from 'react';
// import {useState} from 'react';
// import { useState, useEffect,useRef} from "react";
import { ethers } from "ethers";
import './register.css'
import axios from 'axios'


const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
  `https://rinkeby.infura.io/v3/${INFURA_ID}`
);
function RegisterUser() {
  // Declare a new state variable, which we'll call "count"
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
            const signer = await provider.getSigner();
            const balanceInEther = ethers.utils.formatEther(balance);
            console.log('name',name);
            console.log('email',email);
            // const data= new FormData(event.target);
            axios.post(`http://localhost:5000/api/login/${email}/${name}/${accounts[0]}`).then(res=>{
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
            <div className="form-group">
                <label ></label>
                <input type="email" style={{width: "400px"}} onChange={(e)=>{setEmail(e.target.value)}} title="Enter Valid Email Id" required pattern=".+@gmail\.com" name="email" className="form-control input" placeholder="Enter Email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>
            <div className="form-group">
                <label > </label>
                <input type="text"style={{width: "400px"}} onChange={(e)=>{setName(e.target.value)}}  required pattern="[a-zA-Z]*" className="form-control name input" name="name" id="exampleInputPassword" placeholder="Enter your Name" />
            </div>
            {notification==true?<>{Response}</>:<></>}
            <button type="submit"  className="btn btn-primary" > Sign Up </button>
        </form>
        {/* <button className="btn btn-primary" onClick={handleParticipate}>Connect Meta Mask</button> */}
    </div>
)
}

/*<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form> */


export default RegisterUser;