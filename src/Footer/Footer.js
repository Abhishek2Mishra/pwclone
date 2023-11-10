import React from 'react';
import {IoMailOutline} from 'react-icons/io5';
import {RiInstagramLine} from 'react-icons/ri';
import {FaTelegram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {CiLinkedin} from 'react-icons/ci';
import {IoLogoDiscord} from 'react-icons/io5';
import {IoIosCall} from 'react-icons/io';
import {FaFacebook} from 'react-icons/fa6';
import {FaSquareYoutube} from 'react-icons/fa6';
const Footer = () => {
  return (
    <>
        <div style={{display:"flex", justifyContent:"space-around",background:"#1B2124",color:"white",height:"60vh",padding:"60px 0"}}>
           
            <div>
                <img src='./IMAGE/footerlogo1.jpeg' style={{height:"35px", width:"100px"}}/>
                <div style={{display:"flex", alignItems:"center", gap:"10px",margin:"20px 0"}}>
                    <IoMailOutline/>
                    <p>support@pwskills.com</p>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"10px",margin:"20px 0"}}>
                    <IoIosCall/>
                    <p>+91 8867917516</p>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"10px",margin:"20px 0"}}>
                    <FaFacebook/>
                    <RiInstagramLine/>
                    <FaTelegram/>
                    <FaSquareYoutube/>
                    <FiTwitter/>
                    <CiLinkedin/>
                    <IoLogoDiscord/>
                </div>
                <div>
                    <img src='./IMAGE/footerlogo2.jpeg' style={{height:"100px", width:"100px",borderRadius:"50%"}}/>
                </div>
            </div>
            <div>
                <h1 style={{marginBottom:"10px"}}>Company</h1>
                <div style={{height:"3px", width:"300px",background:"#E97862",borderRadius:"5px"}}></div>
            <div style={{display:'flex',justifyContent:"space-between",gap:"100px"}}>
                <div>
                    <ul style={{listStyleType: "none"}}>
                        <li style={{margin:"20px 0"}}>About us</li>
                        <li style={{margin:"20px 0"}}>FAQ</li>
                        <li style={{margin:"20px 0"}}>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <ul style={{listStyleType: "none"}}>
                        <li style={{margin:"20px 0"}}>Contact us</li>
                        <li style={{margin:"20px 0"}}>Job assurance</li>
                        <li style={{margin:"20px 0"}}>Terms and condition</li>
                    </ul>
                </div>
            </div>
            </div>
            <div>
                <h1 style={{marginBottom:"10px"}}>Products</h1>
                <div style={{height:"3px", width:"300px",background:"#E97862",borderRadius:"5px"}}></div>
                <div style={{display:'flex',justifyContent:"space-between",gap:"100px"}}>
                    <div style={{listStyleType: "none"}}>
                        <ul style={{listStyleType: "none"}}>
                            <li style={{margin:"20px 0"}}>PW Skills Lab</li>
                            <li style={{margin:"20px 0"}}>experience Portal</li>
                            <li style={{margin:"20px 0"}}>Hall Of fame</li>
                        </ul>
                    </div>
                    <div>
                        <ul  style={{listStyleType: "none"}}>
                            <li style={{margin:"20px 0"}}>Job Portal</li>
                            <li style={{margin:"20px 0"}}>Become an affiliate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Footer
