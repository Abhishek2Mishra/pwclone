import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
// import { BiExpandVertical } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs'
import { IoMdHome } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const LeftBlock = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(false);
    const [panel,setPanel]=useState("")
    const [expandeds1, setExpandeds1] = React.useState(true);
    const [expandeds2, setExpandeds2] = React.useState(true);
    const [expandeds3, setExpandeds3] = React.useState(true);
    const [expandeds4, setExpandeds4] = React.useState(true);
    const [expandeds5, setExpandeds5] = React.useState(true);
    const [expandeds6, setExpandeds6] = React.useState(true);
    const [expandeds7, setExpandeds7] = React.useState(true);
    const [btn1, setBtn1] = React.useState(false);
    const [btn2, setBtn2] = React.useState(false);
    const handleChange = (panel) => () => {
        
      if(panel ==="panel1"){
        setPanel("panel1")
        setExpanded(!expanded)
      }else if(panel ==="panel2"){
        setPanel("panel2")
        setExpanded(!expanded)
      }else if(panel ==="panel3"){
        setPanel("panel3")
        setExpandeds3(!expandeds3)
      }else if(panel ==="panel4"){
        setPanel("panel4")
        setExpanded(!expanded)
      }else if(panel ==="panel5"){
        setPanel("panel5")
        setExpanded(!expanded)
      }else if(panel ==="panel6"){
        setPanel("panel6")
        setExpanded(!expanded)
      }else if(panel ==="panel7"){
        setPanel("panel7")
        setExpanded(!expanded)
      }
    };
    const handleClick1 =()=>{
        setExpandeds1(!expandeds1)
    }
    const handleClick2 =()=>{
      setExpandeds2(!expandeds2)
    }
    const handleClick4 =()=>{
      setExpandeds4(!expandeds4)
    }
    const handleClick5 =()=>{
      setExpandeds5(!expandeds5)
    }
    const handleClick6 =()=>{
      setExpandeds6(!expandeds6)
    }
    const handleClic7 =()=>{
      setExpandeds7(!expandeds7)
    }
    const handleClick3 =()=>{
      setExpandeds3(!expandeds3)
    }
    const handleClickBtn1 = ()=>{
      setBtn1(!btn1);
    }
    const handleClickBtn2 = ()=>{
      setBtn2(!btn2);
    }
  return (
    <div>
       <section>
        <div className='my-8'>
        <div className='flex items-center my-2'>
          <IoMdHome/>
          <span style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Home</span>
          <span>{">"}</span>
          <span>Courses</span>
        </div>
        <div className='text-3xl font-bold'>Our Courses</div>
        </div>
        <div className='shadow-lg'>
        <div class="divide-y divide-slate-200" >
          <div className='flex items-center my-2 gap-2 p-2' >
          <BsFilter/>
          <span className='text-xs font-bold'>Filters</span>
          </div>
          </div>
          <div className='flex-col my-2 gap-2 p-2' >
            <div className='flex justify-between items-center'>
              <h1 className='text-xl font-bold cursor-pointer' onClick={handleClick1} >Filter by Profession</h1>
              {expandeds1 ? <AiOutlineDown onClick={handleClick1}/>:<AiOutlineUp onClick={handleClick1}/>}
            </div>
            {expandeds1 &&
            <div>
            <form>
              <input type='checkbox' id='check1' name='check1' value='check1'/>
              <label for='check1' className='text-xs'> College Student (7)</label>
            </form>
            <form>
              <input type='checkbox' id='check2' name='check1' value='check1'/>
              <label for='check2' className='text-xs'> School Student (5)</label>
            </form>
            <form>
              <input type='checkbox' id='check3' name='check1' value='check1'/>
              <label for='check3' className='text-xs'> Working Professional (2)</label>
            </form>
            </div>
            }
          </div>
          <div className='my-2 gap-2 p-2'>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold cursor-pointer' onClick={handleClick2}>Filter by Program</h1>
            {expandeds2 ? <AiOutlineDown onClick={handleClick2}/>:<AiOutlineUp onClick={handleClick2}/>}
            </div>
            {expandeds2 &&
            <div>
            <form>
              <input type='checkbox' id='check4' name='check1' value='check1'/>
              <label for='check4' className='text-xs'> Community (1)</label>
            </form>
            <form>
              <input type='checkbox' id='check5' name='check1' value='check1'/>
              <label for='check5' className='text-xs'> Live (4)</label>
            </form>
            <form>
              <input type='checkbox' id='check6' name='check1' value='check1'/>
              <label for='check6' className='text-xs'> Trending (7)</label>
            </form>
            </div>
}
          </div>
          <div className='my-2 gap-2 p-2' >
            <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold cursor-pointer ' onClick={handleClick3}>Domain</h1>
            {expandeds3?<AiOutlineDown onClick={handleClick3}/>:<AiOutlineUp onClick={handleClick3}/>}
            </div>
            { expandeds3 &&
             <div>
                <form>
                <input type='checkbox' id='check7' name='check1' value='check1'/>
                <label for='check7' className='text-xs'> Artificial Intelligence (3)</label>
                </form>
                <form>
                <input type='checkbox' id='check8' name='check1' value='check1'/>
                <label for='check8' className='text-xs'> Foftware Engineering (4)</label>
                </form>
                </div>
            }     
            </div>
            <div className='my-2 gap-2 p-2' >
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold cursor-pointer' onClick={handleClick4}>Category</h1>
                {expandeds4 ? <AiOutlineDown  onClick={handleClick4}/>:<AiOutlineUp  onClick={handleClick4}/>}
              </div>
                { expandeds4 && <div>
                <form>
                <input type='checkbox' id='check1' name='check1' value='check1'/>
                <label for='check1' className='text-xs'> Data Analytics (1)</label>
                </form>
                <form>
                <input type='checkbox' id='check9' name='check1' value='check1'/>
                <label for='check9' className='text-xs'> Dsta Science (2)</label>
                </form>
                <form>
                <input type='checkbox' id='check10' name='check1' value='check1'/>
                <label for='check10' className='text-xs'> Java Development (1)</label>
                </form>
                <form>
                <input type='checkbox' id='check11' name='check11' value='check1'/>
                <label for='check11' className='text-xs'> Web Development (3)</label>
                </form>
                </div>
                }
          </div>

          <div className='my-2 gap-2 p-2 ' >
              <div className='flex justify-between items-center'>
                  <h1 className='text-xl font-bold cursor-pointer' onClick={handleClick5}>SubCategory</h1>
                  {expandeds5 ? <AiOutlineDown  onClick={handleClick5}/>:<AiOutlineUp  onClick={handleClick5}/>}
             </div>
                    { expandeds5 && <div>
                    <form>
                      <input type='checkbox' id='check12' name='check1' value='check1'/>
                      <label for='check12' className='text-xs'> Data Science Master (1)</label>
                    </form>
                    <form>
                      <input type='checkbox' id='check13' name='check1' value='check1'/>
                      <label for='check13' className='text-xs'> Full Stack Data Analytics (1)</label>
                    </form>
                    <form>
                      <input type='checkbox' id='check14' name='check1' value='check1'/>
                      <label for='check14' className='text-xs'> Full Stack Data Science (1)</label>
                    </form>
                    <form>
                      <input type='checkbox' id='check15' name='check1' value='check1'/>
                      <label for='check15' className='text-xs'> Full Stack Web Dev (2)</label>
                    </form>
                    <form>
                      <input type='checkbox' id='check16' name='check1' value='check1'/>
                      <label for='check16' className='text-xs'> Java Spring (1)</label>
                    </form>
                    {
                      btn1 && <div>
                        <form>
                          <input type='checkbox' id='check17' name='check1' value='check1'/>
                          <label for='check17' className='text-xs'> Web Fundamentals (1)</label>
                        </form>
                      </div>
                    } 
                    {btn1 ? (
                      <button className="text-red-300" onClick={handleClickBtn1}>
                        View less
                      </button>
                    ) : (
                      <button className="text-red-300" onClick={handleClickBtn1}>
                        View more
                      </button>                  
                    )}                     
                </div>
}
          </div>
          <div className='my-2 gap-2 p-2 '>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold cursor-pointer' onClick={handleClick6}>Istructor</h1>
            {expandeds6 ? <AiOutlineDown  onClick={handleClick6}/>:<AiOutlineUp  onClick={handleClick6}/>}
            </div>
            { expandeds6 && <div>
            <form>
                  <input type='checkbox' id='check18' name='check1' value='check1'/>
                  <label for='check18' className='text-xs'> Mrigank Kashyap (1)</label>
                </form>
                <form>
                  <input type='checkbox' id='check19' name='check1' value='check1'/>
                  <label for='check19' className='text-xs'> Ajay Kumar Gupta (2)</label>
                </form>
                <form>
                  <input type='checkbox' id='check20' name='check1' value='check1'/>
                  <label for='check20' className='text-xs'> Chirag Goel (2)</label>
                </form>
                <form>
                  <input type='checkbox' id='check21' name='check1' value='check1'/>
                  <label for='check21' className='text-xs'> Ekta Negi (2)</label>
                </form>
                <form>
                  <input type='checkbox' id='check22' name='check1' value='check1'/>
                  <label for='check22' className='text-xs'> Hitesh Choudhary (2)</label>
                </form>
                <form>
                  <input type='checkbox' id='check23' name='check1' value='check1'/>
                  <label for='check23' className='text-xs'> Imran (1)</label>
                </form>
                { btn2 &&
                  <div>
                      <form>
                        <input type='checkbox' id='check24' name='check1' value='check1'/>
                        <label for='check24' className='text-xs'> Lekha janardhan (1)</label>
                      </form>
                      <form>
                        <input type='checkbox' id='check25' name='check1' value='check1'/>
                        <label for='check25' className='text-xs'> Nitin M (1)</label>
                      </form>
                      <form>
                        <input type='checkbox' id='check26' name='check1' value='check1'/>
                        <label for='check26' className='text-xs'> Prerna singh (1)</label>
                      </form>
                      <form>
                        <input type='checkbox' id='check27' name='check1' value='check1'/>
                        <label for='check27' className='text-xs'> Priya Bhatia (1)</label>
                      </form>
                      <form>
                        <input type='checkbox' id='check28' name='check1' value='check1'/>
                        <label for='check28' className='text-xs'> Sahil Garg (1)</label>
                      </form>
                      <form>
                        <input type='checkbox' id='check29' name='check1' value='check1'/>
                        <label for='check29' className='text-xs'> Sanket Singh (2)</label>
                      </form>
                      <form>
                        <input type='checkbox' id='check30' name='check1' value='check1'/>
                        <label for='check30' className='text-xs'> Sunny Savita (1)</label>
                      </form> <form>
                        <input type='checkbox' id='check31' name='check1' value='check1'/>
                        <label for='check31' className='text-xs'> vishwa Mohan (4)</label>
                      </form>
                  </div>
                }
                {
                  btn2 ? (<button className='text-red-300'  onClick={handleClickBtn2}>View less</button>):
                  (<button className='text-red-300'  onClick={handleClickBtn2}>View more</button>)
                }
                
                
             




            </div>}
          <div className='my-2 cursor-pointer'>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold' onClick={handleClic7}>Language</h1>
            {expandeds7 ? <AiOutlineDown  onClick={handleClic7}/>:<AiOutlineUp  onClick={handleClic7}/>}
            </div>
            {
                expandeds7 && 
                <div>
                    <form>
                    <input type='checkbox' id='check32' name='check32' value='check1'/>
                    <label for='check32' className='text-xs'> English (5)</label>
                    </form>
                    <form>
                    <input type='checkbox' id='check33' name='check1' value='check1'/>
                    <label for='check33' className='text-xs'> Hinglish (2)</label>
                    </form>
                </div>
            }
          </div>
        </div>     
        </div>
      </section>
    </div>
  )
}
export default LeftBlock