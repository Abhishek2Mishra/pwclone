import React, { useState } from 'react'
import {BsArrowRightCircle} from "react-icons/bs"

const Foot = () => {
  const [click,setClick] = useState(1)
  return (
    <div>
      <div style={{margin:"100px"}}>
        <div style={{display:"flex", justifyContent:"space-between",margin:"20px"}}>
            <h1 style={{fontWeight:"bolder"}}>Frequently Asked Questions</h1>
            <button style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"25px",width:"80px",background:"white",border:"2px solid white"}}><div className="flex items-center"><div>Veiw all</div>  <BsArrowRightCircle/></div> </button>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{background:"white"}}>
                <button className='' style={{display:"flex",justifyContent:"space-between",alignItems:"center" ,height:"60px",width:"750px",background:"white",padding:"10px"}}>
                    <p className={`${click===1? "font-bold":null}`}>I need to purchase a course. Whom should I contact ?</p>
                    <p style={{height:"20px",width:"20px",fontSize:"20px"}} onClick={()=> setClick(1)}><BsArrowRightCircle/></p>
                </button >
                <button style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"0.1px solid lightgray",height:"60px",width:"750px",background:"white",padding:"10px"}}>
                    <p className={`${click===2? "font-bold":null}`}>I need to purchase a course. Whom should I contact ?</p>
                    <p style={{height:"20px",width:"20px",fontSize:"20px"}}
                    onClick={()=> setClick(2)}
                      ><BsArrowRightCircle/></p>
                </button>
                <button style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"0.1px solid lightgray",height:"60px",width:"750px",background:"white",padding:"10px"}}>
                    <p className={`${click===3? "font-bold":null}`}>What is an experience portal ? How to use it ?</p>
                    <p style={{height:"20px",width:"20px",fontSize:"20px"}}
                    onClick={()=> setClick(3)}><BsArrowRightCircle/></p>
                </button>
                <button style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"0.1px solid lightgray",height:"60px",width:"750px",background:"white",padding:"10px"}}>
                    <p className={`${click===4? "font-bold":null}`}>How to get Placements and Job assistance ?</p>
                    <p style={{height:"20px",width:"20px",fontSize:"20px"}}
                    onClick={()=> setClick(4)}><BsArrowRightCircle/></p>
                </button>
            </div>
            <div>
                {click ===1 && <div className='duration-1000 '>
                    <img style={{height:'250px', width:"400px"}} src='./IMAGE/footerimage.avif'/>
                    <p>Contact our counselors through the chat support on our website.<br/> Look for the chat option on the bottom right of the Homepage. Name <br/>the course you’re interested in, and the counseling team will guide<br/> you through the admission process.</p>
                </div>}
                {click ===2 && <div>
                    <img style={{height:'250px', width:"400px"}} src='./IMAGE/footerimage.avif'/>
                    <p>2Contact our counselors through the chat support on our website.<br/> Look for the chat option on the bottom right of the Homepage. Name <br/>the course you’re interested in, and the counseling team will guide<br/> you through the admission process.</p>
                </div>}
                {click ===3 && <div>
                    <img style={{height:'250px', width:"400px"}} src='./IMAGE/footerimage.avif'/>
                    <p>3Contact our counselors through the chat support on our website.<br/> Look for the chat option on the bottom right of the Homepage. Name <br/>the course you’re interested in, and the counseling team will guide<br/> you through the admission process.</p>
                </div>}
                {click ===4 && <div>
                    <img style={{height:'250px', width:"400px"}} src='./IMAGE/footerimage.avif'/>
                    <p>4Contact our counselors through the chat support on our website.<br/> Look for the chat option on the bottom right of the Homepage. Name <br/>the course you’re interested in, and the counseling team will guide<br/> you through the admission process.</p>
                </div>}
            </div>
        </div>
      </div>
    </div>
  )
}
export default Foot
