import React from 'react'
import Navbar from '../../components/Header/Navbar'
import LeftBlock from '../../contents/explore/leftBlock/LeftBlock'
import RightBlock from '../../contents/explore/rightBlock/RightBlock'
import Footer from '../../Footer/Footer'

const Explore = () => {
  return (
    <>
     <Navbar/>
            <div className=' px-40 py-5 flex gap-20'>
                <div className='flex-[0.5]'>
                    <LeftBlock/>
                </div>
                <div className='flex-[1.5] py-40'>
                    <RightBlock/>
                </div>
            </div> 
        <Footer/>
    </>
  )
}

export default Explore
