import React from 'react'
import { AiOutlinePercentage } from 'react-icons/ai'
import { BiAddToQueue, BiSolidBookAlt } from 'react-icons/bi'
import { FaAmazon } from 'react-icons/fa'
import { FcBusinessman } from 'react-icons/fc'
import {useNavigate} from 'react-router-dom';

const RightBlock = () => {
    const navigate = useNavigate();
    const word = [
        { 
            image:'./IMAGE/vediowlaphoto1.jpg',
            par1:"Building MicroServices in",
            par2:"Java for Cloud",
            logo1: <BiAddToQueue/>,
            logo2:<BiSolidBookAlt/> ,
            logo3: <FcBusinessman/> ,
            logo4:<FaAmazon/> ,
            para1:"Prya Bhatia and 2 more",
            para2:"Starts on 7 Oct 2023",
            para3:"Career Fuidance | Job Assurance & More",
            para4:"College Student & Working Profrssional",
            price:"$ 20000",
            discount:"40000.00",
            percDiscount:"50% Discount",
            btn1: "Explorer",
            btn2: "Enroll Now",
        },
        { 
            image: './IMAGE/vediowlaphoto2.jpg',
            par1:"Building MicroServices in",
            par2:"Java for Cloud",
            logo1: <BiAddToQueue/>,
            logo2:<BiSolidBookAlt/> ,
            logo3: <FcBusinessman/> ,
            logo4:<FaAmazon/> ,
            para1:"Prya Bhatia and 2 more",
            para2:"Starts on 7 Oct 2023",
            para3:"Career Fuidance | Job Assurance & More",
            para4:"College Student & Working Profrssional",
            price:"$ 20000",
            discount:"40000.00",
            percDiscount:"50% Discount",
            btn1: "Explorer",
            btn2: "Enroll Now",
        },
        { 
            image: './IMAGE/vediowlaphoto3.jpg',
            par1:"Building MicroServices in",
            par2:"Java for Cloud",
            logo1: <BiAddToQueue/>,
            logo2:<BiSolidBookAlt/> ,
            logo3: <FcBusinessman/> ,
            logo4:<FaAmazon/> ,
            para1:"Prya Bhatia and 2 more",
            para2:"Starts on 7 Oct 2023",
            para3:"Career Fuidance | Job Assurance & More",
            para4:"College Student & Working Profrssional",
            price:"$ 20000",
            discount:"40000.00",
            percDiscount:"50% Discount",
            btn1: "Explorer",
            btn2: "Enroll Now",
        },
        { 
            image: './IMAGE/vidowlaphoto.png',
            par1:"Building MicroServices in",
            par2:"Java for Cloud",
            logo1: <BiAddToQueue/>,
            logo2:<BiSolidBookAlt/> ,
            logo3: <FcBusinessman/> ,
            logo4:<FaAmazon/> ,
            para1:"Prya Bhatia and 2 more",
            para2:"Starts on 7 Oct 2023",
            para3:"Career Fuidance | Job Assurance & More",
            para4:"College Student & Working Profrssional",
            price:"$ 20000",
            discount:"40000.00",
            percDiscount:"50% Discount",
            btn1: "Explorer",
            btn2: "Enroll Now",
        },
        { 
            image: './IMAGE/pw1.jpeg',
            par1:"Building MicroServices in",
            par2:"Java for Cloud",
            logo1: <BiAddToQueue/>,
            logo2:<BiSolidBookAlt/> ,
            logo3: <FcBusinessman/> ,
            logo4:<FaAmazon/> ,
            para1:"Prya Bhatia and 2 more",
            para2:"Starts on 7 Oct 2023",
            para3:"Career Fuidance | Job Assurance & More",
            para4:"College Student & Working Profrssional",
            price:"₹ 20000",
            discount:"40000.00",
            percDiscount:"50% Discount",
            btn1: "Explorer",
            btn2: "Enroll Now",
        },
    ]
  return (
    <div >
        <div className='grid gap-8 grid-cols-2'>
       {
            word.map((iterator)=>{
                return (
                    
                        <div className='bg-white gap-5' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",marginBottom:"10px",borderRadius:"20px"}}>
                        <div style={{color:"black",position:"relative"}}>
                            <div style={{position:"relative"}}>
                                <img src={iterator.image} alt='' style={{width:"100%",height:"100%", borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}/>
                            </div>
                            <div style={{height:"40px", width:"40px", borderRadius:"15px",position:"absolute",top:"50%",left:"50%",bottom:"50%",right:"50%"}}>
                                <img src='./IMAGE/playbutton2.jpg' alt='playbutton' style={{height:"100%", width:"100%",borderRadius:"22px"}} />
                            </div>
                            <div style={{display:'flex',gap:"2px",background:"white", alignItems:"center",borderRadius:"3px",position:"absolute", right:"20px",bottom:"10px", padding:"3px"}}>
                                <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                                    <p style={{height:"5px",width:"5px",borderRadius:"50%",backgroundColor:"#E97862"}}></p>
                                    <p>English</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{padding:"20px"}}>
                            <h2>{iterator.par1}</h2>
                            <h2>{iterator.par2}</h2>
                            <div>
                            <div style={{display:'flex', gap:'15px',margin:"10px"}}>
                                <div>{iterator.logo1}</div>
                                <div><p>{iterator.para1}</p></div>
                            </div>
                            <div style={{display:'flex', gap:'10px',margin:"10px"}}>
                                <div>{iterator.logo2}</div>
                                <div><p>{iterator.para2}</p></div>
                            </div>
                            <div style={{display:'flex', gap:'10px',margin:"10px"}}>
                                <div>{iterator.logo3}</div>
                                <div><p>{iterator.para3}</p></div>
                            </div>
                            <div style={{display:'flex', gap:'10px',margin:"10px"}}>
                                <div>{iterator.logo3}</div>
                                <div><p>{iterator.para4}</p></div>
                            </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between" ,position:"relative"}}>
                                <div style={{fontWeight:"bold"}}>{iterator.price}</div>
                                <div style={{position:"relative",zIndex:"1",textDecoration:"line-through"}}>
                                    {iterator.discount}</div>
                                <div style={{display:"flex",gap:"5px",alignItems:"center"}}> 
                                <AiOutlinePercentage style={{backgroundColor:"green",color:"#fff",borderRadius:"50%",padding:"2px"}}/>
                                <p style={{color:'green'}}> 
                                {iterator.percDiscount}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',marginTop:'10px',height:'40px'}}>
                            <button style={{width: "-webkit-fill-available",height:"50px", color:'#D2614B',borderBottomLeftRadius: "20px",border:"none"}} onClick={() => navigate("/exploreBtn")}>{iterator.btn1}</button>
                            <button id='button' style={{width: "-webkit-fill-available",height:"40px", color:"white",backgroundColor:'#D2614B', borderBottomRightRadius: "20px", border:"none"}} onClick={() => navigate("/login")}>{iterator.btn2}</button>
                        </div> 
                        </div>
                   
                )}
            )  
        }
    </div>
    </div>
  )
}

export default RightBlock
