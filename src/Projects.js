import React from 'react';
import './App.css';
import prontoCV from './prontocv.jpeg'
import ProfileHeader from './ProfileHeader';


function Projects() {
return(
<div className="App">
    <ProfileHeader />
    <div className="container text-start col-6 pt-5">
    
    <div className = "row mb-3">
        <h3 style={{color:"#557a95"}}><b>Project: Pronto CV</b></h3>
    </div>
        <div className="container mb-3 justify-content-md-center">
        <a href="https://www.prontocv.com"><img className="prontoCVPic" src={prontoCV} /> </a>
        </div>
    </div>
    <div className="container text-start col-6" >
        <div className = "row mb-3">
                <h4 style={{color:"#557a95"}}><b>Brief</b></h4>

                <p>Pronto CV is a nifty tool that helps recruiters format candidate CVs to fit their own agency templates before presenting them to their client companies.
                    It's the first in a suite of tools designed specfically to make recruiters' lives easier and automate a lot of their less engaging tasks.
                </p>
        </div>

        <div className= "row mb-3">
                <h4 style={{color:"#557a95"}}><b>Current Status</b></h4>
                <ul>
                    <li>MVP has been released to a closed beta consisting of 10 enterprise users</li>
                    <li>User feedback gathering in progress</li>
                </ul>

        </div>

        `<div className = "row mb-3">
                <h4 style={{color:"#557a95"}}><b>What I Did</b></h4>

                <ul>
                    <li>Helped the founder translate his long term vision into a suite of products</li>
                    <li>Defined the scope of the MVP using the MoSCoW method</li>
                    <li>Created the PRD, user personas, user stories and flows for the MVP</li>
                    <li>Oversaw sprints done by an outsourced development team</li>
                    <li>Set acceptance criteria for testing</li>
                    <li>Groomed the backlog based on development team progress</li>



                </ul>
        
        </div>
        
       
    
    </div>
    </div>
    

);
}

export default Projects;