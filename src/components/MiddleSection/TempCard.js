import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TempCard = () => {

    const Card2 = [
        {
            percentage:"80% increment",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh i am a software Dev",
            para2:"Hello I am Rajesh i am a software Dev",
            para3:"Hello I am Rajesh i am a software Dev",
            para4:"Hello I am Rajesh i am a software Dev",
            para5:"Hello I am Rajesh i am a software Dev",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log15.png",
            comp2:"./IMAGE/log16.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"120% increment",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh i am software dev",
            para2:"Hello I am Rajesh i am software dev",
            para3:"Hello I am Rajesh i am software dev",
            para4:"Hello I am Rajesh i am software dev",
            para5:"Hello I am Rajesh i am software dev",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log13.png",
            comp2:"./IMAGE/log14.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"60% increment",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh i am software dev",
            para2:"Hello I am Rajesh i am software dev",
            para3:"Hello I am Rajesh i am software dev",
            para4:"Hello I am Rajesh i am software dev",
            para5:"Hello I am and i das analiticals science",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log15.png",
            comp2:"./IMAGE/log16.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"100% increment",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan Dasi",
            para2:"Hello I am Rajesh Roshan Dasi",
            para3:"Hello I am Rajesh Roshan Dasi",
            para4:"Hello I am Rajesh Roshan Dasi",
            para5:"Hello I am Rajesh Roshan Dasi",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log3.png",
            comp2:"./IMAGE/log4.svg",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"10 to 12 LPA (Fresher)",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan Das and i am data analyst",
            para2:"Hello I am Rajesh Roshan Das and i am data analyst",
            para3:"Hello I am Rajesh Roshan Das and i am data analyst",
            para4:"Hello I am Rajesh Roshan Das and i am data analyst",
            para5:"Hello I am Rajesh Roshan Das and i am data analyst",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log1.png",
            comp2:"./IMAGE/log2.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"240% increment",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan das analiticals",
            para2:"Hello I am Rajesh Roshan das analiticals",
            para3:"Hello I am Rajesh Roshan das analiticals",
            para4:"Hello I am Rajesh Roshan das analiticals",
            para5:"Hello I am Rajesh Roshan das analiticals",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log3.png",
            comp2:"./IMAGE/log4.svg",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"100% increment",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan Das and dev",
            para2:"Hello I am Rajesh Roshan Das and dev",
            para3:"Hello I am Rajesh Roshan Das and dev",
            para4:"Hello I am Rajesh Roshan Das and dev",
            para5:"Hello I am Rajesh Roshan Das and dev",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log5.psvg",
            comp2:"./IMAGE/log6.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"7.5LPA(Fresher)",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan Das i was working",
            para2:"Hello I am Rajesh Roshan Das i was working",
            para3:"Hello I am Rajesh Roshan Das i was working",
            para4:"Hello I am Rajesh Roshan Das i was workin",
            para5:"Hello I am Rajesh Roshan Das i was working",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log7.png",
            comp2:"./IMAGE/log8.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"10-12LPA(Fresher)",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan Das i was hmm",
            para2:"Hello I am Rajesh Roshan Das i was hmm",
            para3:"Hello I am Rajesh Roshan Das i was hmm",
            para4:"Hello I am Rajesh Roshan Das i was hmm",
            para5:"Hello I am Rajesh Roshan Das i was hmm",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log9.svg",
            comp2:"./IMAGE/log10.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        {
            percentage:"10LPA(Fresher)",
            sortCut:"RD",
            name:"Rajesh Roshan Das",
            designation:"Data Analyst",
            para1:"Hello I am Rajesh Roshan Das i was woo.",
            para2:"Hello I am Rajesh Roshan Das i was woo.",
            para3:"Hello I am Rajesh Roshan Das i was woo.",
            para4:"Hello I am Rajesh Roshan Das i was woo.",
            para5:"Hello I am Rajesh Roshan Das i was woo.",
            text1:"From",
            text2:"To",
            comp1:"./IMAGE/log11.png",
            comp2:"./IMAGE/log12.png",
            arrows:"./IMAGE/logarrow.svg"
        },
        
    ]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",right:'47%',position:'absolute',marginTop:'200px',borderRadius:'10px', boxShadow:'2px 8px 10px 0 rgba(192, 192, 192, 0.3)' }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",left:'47%',marginTop:'200px',position:'absolute',borderRadius:'10px', boxShadow:'2px 8px 10px 0 rgba(192, 192, 192, 0.3)'  }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <>
      <div style={{borderRadius:"20px"}}>
        <Slider {...settings}>
      {
         Card2.map((item)=>{
            return(
                <>
                <div className='bg-white' style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:"120px", height:"340px"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#E3EFE0",height:"40px",width:"360px"}}>{item.percentage}</div>
                    <div style={{height:"240px",paddingLeft:"15px"}}>
                    <div style={{marginTop:"20px"}}>
                        <div style={{display:"flex",gap:"20px"}}>
                            <div style={{borderRadius:"15px", background:"#DDDDDD",height:"30px",width:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>{item.sortCut}</div>
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.designation}</p>
                            </div>
                        </div>
                        <div>
                            <p>{item.para1}</p>
                            <p>{item.para2}</p>
                            <p>{item.para3}</p>
                            <p>{item.para4}</p>
                            <p>{item.para5}</p>
                        </div>
                        <div style={{display:'flex',margin:"20px",justifyContent:'space-around'}}>
                            <h5>{item.text1}</h5>
                            <h5>{item.text2}</h5>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-around'}}>
                            <div><img style={{height:"20px",width:"85px"}} src={item.comp1}/></div>
                            
                            <div><img style={{height:"20px",width:"40px"}} src={item.arrows}/></div>
                            <div><img style={{height:"20px",width:"85px"}} src={item.comp2}/></div>
                            
                        </div>    
                    </div>
                    </div>
                </div>
                </>
            )
        })
      }
      </Slider>
      </div>
    </>
  )
}

export default TempCard
