import React from 'react'

import { BiAddToQueue, BiSolidBookAlt } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { FaAmazon } from "react-icons/fa";
const card = [
    {
        logo: <BiAddToQueue/>,
        heading:"PW Skills Lab",
        para1:"Buying a new PC is no longer required,",
        para2:"Acess unlimited computing power!",
        btn:"Explore->",
    },
    {
        logo:<BiSolidBookAlt/> ,
        heading:"Experience Poertal",
        para1:"Self-paced portal prioritizes hands-on",
        para2:"training with 570+ internship projects.",
        btn:"Explore->",
    },
    {
        logo: <FcBusinessman/> ,
        heading:"Hall Of Fame",
        para1:"Our student placements and 100K+",
        para2:"career transitions speak volumes.",
        btn:"Explore->",
    },
]
const card2 = [
    {
        logo:<FaAmazon/> ,
        heading:"Job Portal",
        para1:"Use exceptional templates for a stand-",
        para2:"out resume minus the sign up process.",
        btn:"Explore->",
    },
    {
        logo:<FaAmazon/> ,
        heading:"Become an affiliate",
        para1:"Explore affiliate marketing opportunities",
        para2:"and attain financial freedom.",
        btn:"Explore->",
    },
]
const ThirdCard = () => {
  return (
    <>
        <div style={{marginTop:"30px",marginLeft:"100px"}}>
            <h1 className='text-2xl font-bold'>Explore Our Ecosystem</h1>
            <p>A one-stop destination for all your learning to placement needs</p>
        </div>
        <div style={{display:"flex",marginLeft:"100px",gap:"30px",marginTop:"30px"}}>
        <div>
      {
        card.map((iterator)=>{
            return (
                <>
                <div style={{marginTop:"30px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"20px",height:"250px",gap:"20px"}}>
                    <div style={{fontSize:"40px",borderRadius:"7px"}}>{iterator.logo}</div>
                    <div><h1 className='text-xl font-bold'>{iterator.heading}</h1></div>
                    <div>
                        <p>{iterator.para1}</p>
                        <p>{iterator.para2}</p>
                    </div>
                    <div>
                        <button>{iterator.btn}</button>
                    </div>
                </div>
                </>
            )
        })
      }
      </div>
      <div style={{marginTop:"100px"}}>
      {
        card2.map((iterator)=>{
            return (
                <>
                <div style={{marginTop:"30px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"20px",margin:"20px",height:"250px"}}>
                    <div style={{fontSize:"40px",borderRadius:"7px"}}>{iterator.logo}</div>
                    <div><h1 className='text-2xl font-bold'>{iterator.heading}</h1></div>
                    <div>
                        <p>{iterator.para1}</p>
                        <p>{iterator.para2}</p>
                    </div>
                    <div>
                        <button>{iterator.btn}</button>
                    </div>
                </div>
                </>
            )
        })
      }
      </div>
      <div style={{marginTop:'150px',marginLeft:"20px"}}>
        <img style={{height:"60vh",width:"30vw"}} src='./IMAGE/programming_01.gif'/>
      </div>

      </div>
    </>
  )
}

export default ThirdCard
