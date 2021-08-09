import React from 'react'
import { HomeBio } from './HomeBio';
import HeroSection from './HeroSection';

export const LandingPage = () => {
    return (
        <div>
            {console.log("i have been invoke")}
            <HeroSection {...HomeBio}></HeroSection>
        </div>
    )
}
