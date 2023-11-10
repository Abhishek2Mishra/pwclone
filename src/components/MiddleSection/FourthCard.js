import React from "react"

const card = [
    {
        heading1:"Guiding You At Every",
        heading2:"Step",
        para1:"Our Top Mentors show you the way,",
        para2:"to becoming a thorough professinal!",
        variable:"amazon Google walmart microsoft linkedin",
        quets1:"Your",
        quets2:"Aspiration",
        quets3:"is our Goal",
        image:"image1",
        btn1:"Explore->",
        btn2:"SKIP ->",
    },
    {
        heading1:"One Stop Destination For",
        heading2:"All Placement Needs",
        para1:"Resume Support Mock Interview,",
        para2:"Exclusive Jov Offers!",
        variable:"500+ Hiring Partners ",
        quets1:"From",
        quets2:"Learning",
        quets3:"to Earning",
        image:"image2",
        btn1:"Explore->",
        btn2:"SKIP ->",
    },
    {
        heading1:"Real-Time Industry",
        heading2:"Experience",
        para1:"Learn & experience real-time development as per industry",
        para2:"standards",
        variable:"Domains Projects Interns",
        quets1:"Earn",
        quets2:"Your",
        quets3:"Experience Latter",
        image:"image3",
        btn1:"Explore->",
        btn2:"SKIP ->",
    },
    {
        heading1:"Flexible Learning Just",
        heading2:"For You!",
        para1:"PW Skills courses are designed to fit every individual's needs.",
        para2:"Learn through LIVE & self-paced courses!",
        variable:"15+ Self Paced Courses 10+ Live Courses",
        quets1:"Learning",
        quets2:"Made For",
        quets3:"Everyone",
        image:"image4",
        btn1:"Explore->",
        btn2:"SKIP ->",
    },
]
const FourthCard = () => {



  return (
    <div>
      {
        card.map((iterator)=>{
            return (
                <>
                    <div>
                        <h1>{iterator.heading1}</h1>
                        <h1>{iterator.heading2}</h1>
                    </div>
                    <div>
                        <p>{iterator.para1}</p>
                        <p>{iterator.para2}</p>
                    </div>
                    <div>{iterator.variable}</div>
                    <div>
                        <button>{iterator.btn1}</button>
                    </div>
                    <div>
                        <button>{iterator.btn2}</button>
                    </div>
                    <div>
                        <p>{iterator.quets1}</p>
                        <p>{iterator.quets2}</p>
                        <p>{iterator.quets3}</p>
                    </div>
                    <div>
                        <img src='#' alt='logo'/>{iterator.image}
                    </div>
                </>
            )
        })
      }
    </div>
  )
}

export default FourthCard
