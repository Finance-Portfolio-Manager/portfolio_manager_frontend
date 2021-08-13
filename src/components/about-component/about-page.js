import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoCard from "./logo-application";
import './about-page.css';
import AboutCard from "./about-application";
import ProfileComponent from "./profile-application";


export default function About(){
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-start">
                    <LogoCard></LogoCard>
            </div>
            <br></br>
            <div className="d-flex flex-column flex-fill justify-content-end mx-auto align-self-end w-50 me-5">
                    <AboutCard></AboutCard>
            </div>
            <br></br>
            <div className="d-flex flex-column">
                   <ProfileComponent></ProfileComponent>
            </div>
        </div>
    );
}