import React from 'react';
import './App.css';
import ProfileHeader from './ProfileHeader';



function HomeScreen() {
  return (
    <div className="App">
     <ProfileHeader />
          <div className="container m-auto p-auto justify-content-md-center col-6">
          <div className="row justify mb-5 text-start">
                <h4 className="highlightsTitle"> Highlights </h4>
                <ul className="highlightsContent">
                    <li><b style={{color:"#557a95"}}>(2021)</b> Product Manager for the Intelligent Automation Suite for SAP Business ByDesign </li>
                    <li><b style={{color:"#557a95"}}>(2021)</b> Article on User Behavior in B2B SaaS published on Bootcamp, Medium's largest UX collective</li>
                    <li><b style={{color:"#557a95"}}>(2021)</b> Article on the big problems to solve in blockchain published in the CodeX collective on Medium </li>
                    <li><b style={{color:"#557a95"}}>(2018-2020)</b> Presales Solution Advisor for 
                        Intelligent Robotic Process Automation, Conversational AI, 
                        and SAP AI Business Services</li>
                    <li><b style={{color:"#557a95"}}>(2018)</b> Designed and built an interactive end-to-end experience showcasing the future of Airline Travel</li> 
                    <li><b style={{color:"#557a95"}}>(2017)</b> Used Rapid Prototyping and Experience Design to generate more than $2M in pipeline for the MENA region </li> 
                    <li><b style={{color:"#557a95"}}>(2017)</b> Founding member of SAP Middle East South Experience Design Lab</li>  
                </ul>
          </div>

                    <div className="row justify text-start">
                <h4 className="highlightsTitle">More About Me </h4>
                <ul className="highlightsContent">
                    <li>I'm a big believer in blockchain and think it will change the world as we know it in the next 10 years</li>
                    <li>I am a Blue Belt in Brazilian Jiu Jitsu </li>
                    <li>I have a B-license in Skydiving issued by USPA</li>
                    <li>I am a PADI certified Rescue Diver </li>
                    <li>My favorite book is Meditations by Marcus Aurelius</li>
                    
                
                  

                </ul>
          </div>
          
          </div>
    
    </div>
  );
}

export default HomeScreen;

