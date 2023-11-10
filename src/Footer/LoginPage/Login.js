import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {FcGoogle} from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Login = () => {
  // const [click , setClick] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState()
  // const handleClick = ()=>{
  //   setClick(!click);
  // }
  return (
    <div style={{display:"flex",height:"100%", width:"100%",position:"relative",margin:"0",padding:"0"}}>
      <div   >
        <img className='!z-10' src='./IMAGE/singuppage.svg' alt='logo'/>
      </div>
      <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.5)",padding:"40px", position:"absolute", zIndex:"100", right:"0", border:"1px solid red", bottom:"0", top:"0", display:"flex", justifyContent:"flex-start",width:"40vw", background:"white" }}>
    
        <section style={{margin:"20px 0"}}>
        <div>
            <img style={{height:"60px",width:"150px",}} src='./IMAGE/footerlogo1.jpeg' alt='logo' onClick={()=>navigate('/')} />
        </div>
            <div style={{margin:"10px 0"}}>
                <h1 className='text-2xl font-bold'>Get Onboard and jumpstart <br/> your career!</h1>
            </div>
            <div style={{marginBottom:"40px"}}>
                <p>Please enter your phone number to login/register</p>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    style={{outline:"0px",border:"none"}}
                    />
                
            </div>
            <div style={{border:"1px solid gray", width:"400px",height:"1px", marginBottom:"10px"}}></div>
            <div>
                <button style={{width:"400px", height:"40px",color:"white", background:"#E4A093",borderRadius:"5px", margin:"20px 0"}}>Send OTP</button>
            </div>

            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <span>OR</span>
            </div>
            <div className='flex justify-center items-center'>
            <div style={{border:"1px solid gray",display:"flex",alignItems:"center",padding:"10px", marginTop:"10px", width:"48%"}}>
                <FcGoogle style={{margin:"0 5px"}}/>
                <span>Sign in with google</span>
            </div>
            </div>
        </section>
      </div>
    </div>
  )
}
export default Login
