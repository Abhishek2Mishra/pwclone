import React from 'react';
import "./MidSection.css";
import Type from './Type';
import { useNavigate } from 'react-router-dom';
const MidSection = () => {
    const navigate = useNavigate()
    
  return (
    <>
        <section className='section'>
            <div className='Left-section'>
                <div>
                    <Type/>
                </div>
                <div className='heading'>
                    <h1>With PW Skills</h1>
                </div>
                    <div>
                        <p>PW Skills is your one-stop-shop for upscaling. Get maximum value for time</p>
                        <p> and resources you invest, with job-ready courses & high-technology,</p>
                        <p> available at the lowest cost.</p>
                    </div>
                    <button className='btn' onClick={()=>navigate('./explore')}>Explore Courses</button>
            </div>
            <div className='right-section'>
                <div className='img1'>
                    <img  src='./IMAGE/pw1.jpg'></img>
                </div>
            </div>
        </section>
    </>
  )
}

export default MidSection
