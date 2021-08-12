/*
Carlos Galvan Jr 

This React "Container" component to cycle through themes (themeSelection)
*/
import { useEffect, useState } from 'react';
import { themeSelection, themeVersions } from '../styles/Themes';

export const useAllThemes = () => {
    const [theme, setTheme] = useState('light');

    //sets new theme
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        //code snippet iterates over the array over and over
        setMode(themeVersions[(themeVersions.indexOf(theme) + 1) % themeVersions.length])
    };
    //establishes current theme
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme)
        localTheme && setTheme(localTheme)
    }, []);
    return [theme, themeToggler] //return state
};
