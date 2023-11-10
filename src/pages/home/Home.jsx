import React from 'react'
import Navbar from '../../components/Header/Navbar'
import MidSection from '../../components/Header/MidSection'
import FirstCard from '../../components/MiddleSection/FirstCard'
import SecondCard from '../../components/MiddleSection/SecondCard'
import ThirdCard from '../../components/MiddleSection/ThirdCard'
import FourthCard from '../../components/MiddleSection/FourthCard'
import FifthCard from '../../components/MiddleSection/FifthCard'
import Foot from '../../components/MiddleSection/Foot'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/> 
      <MidSection/>
      <FirstCard/>
      <SecondCard/>
      <ThirdCard/>
      <FourthCard/>
      <FifthCard style={{backgroundcolor:"#F9F6F5"}}/>
      {/* <SliderVertical/> */}
      <Foot/>
      <Footer/>
    </div>
  )
}

export default Home
