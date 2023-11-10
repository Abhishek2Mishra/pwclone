import React from 'react'
import { BiAddToQueue, BiSolidBookAlt } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { FaAmazon } from "react-icons/fa";
import "./FirstCard.css"
const small = [
    {
        logo: './IMAGE/firstcardlogo.png',
        percentage:55,
        para:"Average Salary Hike",
    },
    {
        logo:'./IMAGE/firstcardlogo2.png',
        percentage:600,
        para:"Different Courses",
    },
    {
        logo:'./IMAGE/firstcardlogo3.png',
        percentage:12000,
        para:"Career Transitions",
    },
    {
        logo:'./IMAGE/firstcardlogo4.png',
        percentage:400,
        para:"Hiring Partners",
    },
]

const FirstCard = () => {
  return (
    <>
        <div style={{display:'flex', justifyContent:"space-around", paddingLeft:"190px",paddingRight:"220px",paddingTop:"40px",gap:"20px"}}>
            {
                small.map((iterator)=>{
                    return(
                        <div className='card-main' style={{boxShadow: '4px 4px 4px 0 rgba(0, 0, 0, 0.1)'}}>
                            <div className='card'>
                            <div className='logo' style={{borderRadius:"5px",fontSize:"30px"}}>
                                <img src = {iterator.logo} style={{height:"45px", width:"45px"}}/>
                            </div>
                            <div className='part'>
                                <span>{iterator.percentage}</span>
                                <p>{iterator.para}</p>
                            </div>
                        </div>
                    </div>
                    )
                    
                })
            }
        
        </div>
        <div style={{margin:"100px"}}>
        <div style={{display:'flex', justifyContent:"space-between",paddingLeft:"100px", paddingRight:"120px"}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>
               <h1 className='text-2xl font-bold'>Our Courses</h1>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>
                <button style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"30px", width:"80px",border:"none"}}>View all</button>
            </div>
        </div>
        <div style={{marginTop:"30px"}}>
            <div style={{display:'flex',gap:'20px',marginTop:'30px',marginLeft:'130px'}}>
                <h4>Trending</h4>
                <h4>Live</h4>
                <h4>Community</h4>
            </div>
            <div style={{border:'0.1px solid gray',marginLeft:'110px',marginTop:"10px",marginRight:"120px",marginBottom:"-70px"}}></div>
        </div>
        </div>
    </>    
  )
}

export default FirstCard
