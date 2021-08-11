/*
Carlos Galvan Jr 

Landing page component formats the hero section and maybe the about page
*/
import React from 'react'
import { HomeBio } from './HomeBio';
import HeroSection from './HeroSection';

export const LandingPage = () => {
    return (
        <div>
            <HeroSection {...HomeBio}></HeroSection>
        </div>
    )
}
