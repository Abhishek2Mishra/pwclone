import React from 'react'
import './FifthCard.css';
import TempCard from './TempCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowRightCircle} from "react-icons/bs";

const card = [
    {
        logo:'./IMAGE/logo1.png'
    },
    {
        logo:'./IMAGE/logo2.png'
    },
    {
        logo:'./IMAGE/logo3.png'
    },
    {
        logo:'./IMAGE/logo4.png'
    },
    {
        logo:'./IMAGE/logo5.png'
    },
    {
        logo:'./IMAGE/logo6.png'
    },{
        logo:'./IMAGE/logo7.png'
    },
    {
        logo:'./IMAGE/logo8.png'
    },{
        logo:'./IMAGE/logo9.png'
    },
    {
        logo:'./IMAGE/logo10.png'
    },{
        logo:'./IMAGE/logo11.png'
    },
    {
        logo:'./IMAGE/logo12.png'
    },{
        logo:'./IMAGE/logo13.png'
    },
    {
        logo:'./IMAGE/logo14.png'
    },{
        logo:'./IMAGE/logo15.png'
    },
    {
        logo:'./IMAGE/logo16.png'
    },{
        logo:'./IMAGE/logo17.png'
    },
    {
        logo:'./IMAGE/logo18.png'
    },{
        logo:'./IMAGE/logo19.png'
    },
    {
        logo:'./IMAGE/logo20.png'
    },{
        logo:'./IMAGE/logo21.png'
    },
    {
        logo:'./IMAGE/logo22.png'
    },{
        logo:'./IMAGE/logo23.png'
    },
    {
        logo:'./IMAGE/logo24.png'
    },{
        logo:'./IMAGE/logo25.png'
    },
    {
        logo:'./IMAGE/logo27.png'
    },{
        logo:'./IMAGE/logo28.png'
    },
    {
        logo:'./IMAGE/logo29.png'
    },{
        logo:'./IMAGE/logo30.png'
    },
    {
        logo:'./IMAGE/logo31.png'
    },{
        logo:'./IMAGE/logo32.png'
    },
    {
        logo:'./IMAGE/logo34.png'
    },{
        logo:'./IMAGE/logo35.png'
    },
    {
        logo:'./IMAGE/logo36.png'
    },{
        logo:'./IMAGE/logo37.png'
    },
    {
        logo:'./IMAGE/logo38.png'
    },{
        logo:'./IMAGE/logo39.png'
    },
    {
        logo:'./IMAGE/logo40.png'
    },{
        logo:'./IMAGE/logo41.png'
    },
    {
        logo:'./IMAGE/logo42.png'
    },{
        logo:'./IMAGE/logo43.png'
    },
    {
        logo:'./IMAGE/logo44.png'
    },{
        logo:'./IMAGE/logo45.png'
    },
    {
        logo:'./IMAGE/logo46.png'
    },{
        logo:'./IMAGE/logo47.png'
    },
    {
        logo:'./IMAGE/logo48.png'
    },{
        logo:'./IMAGE/logo49.png'
    },
    {
        logo:'./IMAGE/logo50.png'
    },{
        logo:'./IMAGE/logo51.png'
    },
    {
        logo:'./IMAGE/logo52.png'
    },{
        logo:'./IMAGE/logo53.png'
    },
    {
        logo:'./IMAGE/logo54.png'
    },{
        logo:'./IMAGE/logo55.png'
    },
    {
        logo:'./IMAGE/logo56.png'
    },{
        logo:'./IMAGE/logo57.png'
    },
    {
        logo:'./IMAGE/logo58.png'
    },{
        logo:'./IMAGE/logo59.png'
    },
    {
        logo:'./IMAGE/logo60.png'
    },
    {
        logo:'./IMAGE/logo61.png'
    },
    {
        logo:'./IMAGE/logo62.png'
    },
    {
        logo:'./IMAGE/logo63.png'
    },
    {
        logo:'./IMAGE/logo64.png'
    },
]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",right:'47%',position:'absolute',marginTop:'100px',borderRadius:'10px', boxShadow:'2px 8px 10px 0 rgba(192, 192, 192, 0.3)' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",bottom:'10px',left:'47%',position:'absolute',marginTop:'100px',borderRadius:'10px', boxShadow:'2px 8px 10px 0 rgba(192, 192, 192, 0.3)'  }}
        onClick={onClick}
      />
    );
  }

const FifthCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        Arrow:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <>
    <div style={{background:"#FFFAF9"}}>
        <div style={{display:'flex'}}>
            <h1 className='font-bold text-3xl'>Our Achievers Work With</h1>
        </div>
        
        <div style={{margin:'100px',gap:'10px',height:'100px' }}>
        <Slider {...settings}>
            {
                card.map((currEle)=>{
                    return(
                        <>
                            <div className='bg-white' style={{height:'80px', width:'230px', boxShadow:'2px 8px 10px 0 rgba(192, 192, 192, 0.3)',borderRadius:'10px',overflow:'hidden',marginTop:"13px"}}>
                                <img src={currEle.logo} />
                            </div>
                        </>
                    )
                })
            }
            </Slider>
            
        </div>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",margin:"30px 100px"}}>
           <h1 className='font-bold text-3xl'>Success Stories</h1> 
           <button className='font-bold' style={{height:"1.5rem", width:"5rem"}}><div className='flex gap-1 items-center w-24 justify-center shadow-xl rounded-lg bg-white h-9'><p>View all </p><div className='border-white'><BsArrowRightCircle/></div> </div></button>
        </div>
        <TempCard/>
        </div>
    </>
  )
}
export default FifthCard
