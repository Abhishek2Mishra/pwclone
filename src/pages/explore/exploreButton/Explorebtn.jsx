import React from 'react'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../Footer/Footer'
import { IoMdCodeWorking, IoMdHome } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

// import {ShareSocial} from 'react-share-social' ;
import { FcVideoCall } from 'react-icons/fc';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import {BiSolidMessageCheck} from 'react-icons/bi';

const Explorebtn = () => {
    const navigate = useNavigate();
  return (
    <>
        <Navbar/>
        <div className='flex justify-between items-center p-20'>
            <div className='mx-4'>
                <div className='flex items-center gap-2'>
                <IoMdHome/>
                <span>Home</span>
                <span>{">"}</span>
                <span>Full Stack Web Dev</span>
                </div>
                <div>
                    <h1 className='text-3xl font-bold my-3'>Decode Data Science With <br/> Machine Learning 1.0</h1>
                    <p className='font-semibold text-slate-600 my-3'>Embark on a transformative learning journey with our "Python and Machine <br/> Learning Essentials" course. Delve into the foundations of Python programming <br/> and seamlessly transition into the fascinating world of machine learning. This <br/> course is designed for individuals with a keen interest in machine learning and a <br/> desire to harness the power of Python for creating intelligent and impactful <br/> applications.</p>
                </div>
                <div>
                    <div className='flex gap-2 my-2'>
                        <span className='font-bold'>₹ 3500.00</span>
                        <span className='line-through'>700.00</span>
                        <div className='flex items-center'>
                            <div className='rounded-full h-5 w-5 bg-green-500 text-white mx-1 flex items-center justify-center'>%</div>
                            <span>50% Discount</span>
                        </div>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <button className='text-white bg-red-400 h-10 w-40 rounded-md' onClick={()=>navigate("/login")}>Enroll Now</button>
                        <button className='text-red-600 bg-red-200 h-10 w-40 rounded-md'>Share</button>
                    </div>
                    <div className='my-2'>
                        <span>* EMI Options Available</span>
                    </div>
                </div>
            </div>
                <div className='relative'>
                    <div className='relative'>
                        <img className='rounded-lg ' src='./IMAGE/exploreimage.png'/>
                    </div>
                    <div className=''>
                        <img className='rounded-full h-10 absolute top-1/2 left-1/2' src='./IMAGE/playbutton2.jpg'/>
                    </div>
                </div>
        </div>

        <div className='bg-red-50 p-10'>
            <div className='flex items-center justify-between shadow-2xl rounded-md h-28 px-20 bg-white'>
                <div className='px-1'>
                    <h1 className='font-bold text-xl'>25 Nov 2023</h1>
                    <p className='text-slate-500'>Starts On</p>
                </div>
                <div className='px-1'>
                    <h1 className='font-bold text-xl'>4 Months</h1>
                    <p className='text-slate-500'>Duration</p>
                </div>
                <div className='px-1'>
                    <h1 className='font-bold text-xl'>Anyone</h1>
                    <p className='text-slate-500'>Eligibility</p>
                </div>
                <div className='px-1'>
                    <h1 className='font-bold text-xl'>Hinglish</h1>
                    <p className='text-slate-500'>Language</p>
                </div>
             </div>
             <div className='flex justify-between items-center px-20 py-10'>
                <div>
                    <div className='font-bold text-4xl rounded-full bg-yellow-200 h-16 w-16 flex justify-center items-center ml-24'>
                    <IoMdCodeWorking/>
                    </div>
                    <h1 className='text-xl ml-7'>Roles After Completion</h1>
                    <p className='text-slate-500'>Full Stack Developer, Frontend Engineer,</p> 
                    <p className='text-slate-500 ml-16'>Backend Engineer</p>
                </div>
                <div>
                    <divc className='font-bold text-4xl rounded-full bg-green-200 h-16 w-16 flex justify-center items-center ml-7'>
                    <FcVideoCall/>
                    </divc>
                    <h1 className='text-xl'>Learning Mode</h1>
                    <p className='text-slate-500 ml-9'>Hybrid</p>
                </div>
                <div>
                    <div className='font-bold text-4xl rounded-full bg-red-200 h-16 w-16 flex justify-center items-center ml-24'>
                        <RiLightbulbFlashFill/>
                    </div>
                    <h1 className='text-xl ml-14'>Skills You Will Gain</h1>
                    <p className='text-slate-500'>HTML, CSS, Tailwind CSS, JavaScript, React, </p> 
                    <p  className='text-slate-500 ml-10'>MongoDB, NodeJS, ExpressJS</p>
                </div>
                <div>
                    <div className='font-bold text-4xl rounded-full bg-blue-300 h-16 w-16 flex justify-center items-center ml-12'>
                        <BiSolidMessageCheck/>
                    </div>
                    <h1 className='text-xl'>Minimum Eligibility</h1>
                    <p className='text-slate-500 ml-14'>Anyone</p>
                </div>             
             </div>
        </div>
        <div className='m-10 flex justify-center'>
                <h1>Courses Offerings</h1>
            </div>
        <div className='h-screen w-screen flex justify-center items-center'>     
            <div className='grid grid-rows-3 grid-cols-4 p-52 my-10'>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex10.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex11.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex12.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex13.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex14.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex15.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex16.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex17.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex18.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20'  alt='im' src='./IMAGE/ex19.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20' alt='im' src='./IMAGE/ex20.png'/>
                    <p></p>
                </div>
                <div className='h-56 w-56 border-solid border-2 border-slate-100 flex justify-center items-center'>
                    <img className='h-20 w-20' alt='im' src='./IMAGE/ex21.png'/>
                    <p></p>
                </div>
            </div>
        </div>
        <Footer/> 
    </>
  )
}

export default Explorebtn
