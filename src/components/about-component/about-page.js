import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'compiled/bootstrap/dist/css/bootstrap.min.css';
import LogoCard from "./logo-application";
import './about-page.css';
import AboutCard from "./about-application";
import ProfileComponent from "./profile-application";



export default function About(){
    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between w-60 mx-auto h-60 m-5 p-5 align-items-center">
                    <div className="team d-flex justify-content-center align-items-center">
                        <span><LogoCard></LogoCard></span>
                    </div>
                    <div className="border-0 border-start border-5 ms-5 h-60 my-auto"></div>
                    <div className="ms-5">
                        <AboutCard></AboutCard>
                    </div>
                </div>
            
            <div className="d-flex flex-column">
                   <ProfileComponent></ProfileComponent>
            </div>
        </div>
    );
}