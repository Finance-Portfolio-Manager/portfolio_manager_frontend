import { Tabs } from "react-bootstrap";
import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'compiled/bootstrap/dist/css/bootstrap.min.css';
import LogoCard from "./logo-application";
import './about-page.css';
import AboutCard from "./about-application";
import { Container, Row, Col } from "react-bootstrap";
import ProfileComponent from "./profile-application";


export default function About(){
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-start w-50">
                    <LogoCard></LogoCard>
            </div>
            <br></br>
            <div className="d-flex flex-column justify-content-end w-50" id="about-card">
                    <AboutCard></AboutCard>
            </div>
            <br></br>
            <div className="d-flex flex-column">
                   <ProfileComponent></ProfileComponent>
            </div>
        </div>
    );
}