import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <section className='main'>
      <div className='upper-section-nav'>
        <div className='logo'>
            <img src='./IMAGE/pwlogo.png' alt='logo' className='logo-image' onClick={()=>navigate('/')}></img>
        </div>
        <div className='search'>
            <input id='search-bar' placeholder='Search by product title'></input>
            <div className='searchIcon'>
            <i style={{margin:"25px 0"}} className="fa fa-search"/>
            </div>
            <label htmlFor='search-bar'></label>
        </div>
        <div style={{marginTop:"0px"}} className='btn'>
            <button onClick={()=>navigate("/login")}>Login / Register</button>
        </div>
      </div>
      <div className='lower-section-nav'>
        <form className='opt' action='/action_page.php'>
                <label htmlFor='courses'></label>
                <select name="courses" id='courses'>
                    <optgroup>
                        <option value="courses">
                            courses
                        </option>
                        <option value="Software Engineering" >
                            Software Engineering
                        </option>
                        <option value="Artificial Intelligence" >
                            Artificial Intelligence
                        </option>
                        <option value="Pre Placement" >
                            Pre Placement
                        </option>
                    </optgroup>
                </select>
            </form>
        <div style={{padding:"0px"}} className='mid-lower-navbar'>
            <ul>
                <li>
                    PW Skills Lab
                </li>
                <li>
                    Job Portal
                </li>
                <li>
                    Experience Portal
                </li>
                <li>
                    Become an affiliate
                </li>
                <li>
                    Hall Of fame
                </li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
