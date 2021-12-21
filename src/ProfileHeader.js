import React from 'react';
import profilePic from './Profile_Pic.jpeg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { Link } from 'react-router-dom';

library.add(fab);

const ProfileHeader = () => {
return(
<div>
      <div className="container pt-5 justify-content-md-center">
        <img className="profilePic" src={profilePic} alt="Profile Pic"/>
        <h3 style={{color:"#557a95"}}>
          Hi, I'm Yousef
        </h3>
        <div className= "container m-auto">
        <div className="row mb-2 justify-content-md-center">
          <div className="col-md-auto">
          <a href="https://www.linkedin.com/in/yousefaen">
            <FontAwesomeIcon size="2x" icon={['fab','linkedin']} />
          </a>          
          </div>
          <div className="col-md-auto">
          <a href="https://www.medium.com/@yousef.aboelnour">
          <FontAwesomeIcon size="2x" icon={['fab','medium']} />
          </a>
          </div>
          <div className="col-md-auto">
          <a href="https://twitter.com/yousefaen">
          <FontAwesomeIcon size="2x" icon={['fab','twitter-square']} />
          </a>
          </div>
        </div>

        <div className="row textMenu mb-2 justify-content-md-center">
        <div className="col-md-auto">
        <Link className="menuItem" style={{color:"#557a95"}} to='/'>Who I Am</Link>
        </div>

        <div className="col-md-auto">
        <p style={{color:"#557a95"}}>What I'm Reading</p>
        </div>

        <div className="col-md-auto">
        <Link className="menuItem" style={{color:"#557a95"}} to='/Projects'>What I'm Working On</Link>
        </div>
        </div>
        </div>
        </div>
    </div>
);

}

export default ProfileHeader;