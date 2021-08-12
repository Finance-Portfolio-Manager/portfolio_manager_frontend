<<<<<<< HEAD
const darkBackground = "#051923";
const mediumDarkBackground = "#003554";
const mediumBackground = "#006494";
const mediumLightBackground = "#0582CA";
const lightBackground = "#00A6FB";

// export const lightTheme = {
//     body: '#FFF',
//     text: '#000',
//     toggleBorder: '#FFF',
//     background: '#363537',
//     darkestDark: '#FFF',
//     mediumDark: '#000000',
//     primaryColor: '#A7ABB7',
//     secondaryColor: '#D9DADF',
//     accentColor: '#F00281',
// }

export const lightTheme = {
    body: '#FFF',
    text: '#000',
    toggleBorder: '#FFF',
    background: '#363537',
    darkestDark: '#FFF',
    mediumDark: '#000000',
    primaryColor: lightBackground, //top part and footer
=======
/*
Carlos Galvan Jr 

A collection of themes to be used with style-components module to set the color scheme
*/

export const lightTheme = {
    // body: '#FFF',
    // text: '#000',
    // toggleBorder: '#FFF',
    // background: '#363537',
    // darkestDark: '#FFF',
    // mediumDark: '#000000',
    primaryText: '#000',
    secondaryText: '#333333',
    primaryColor: '#A7ABB7',
>>>>>>> team3
    secondaryColor: '#D9DADF',
    accentColor: '#F00281',
}

// export const darkTheme = {
//     body: '#363537' ,
//     text: '#FAFAFA',
//     toggleBorder: '#6B8096',
//     background: '#999',
//     darkestDark: '#151B2C',
//     mediumDark: '#21293E',
//     primaryColor: '#151B2C',
//     secondaryColor: '#21293E',
//     accentColor: '#F00281',
// }

export const darkTheme = {
<<<<<<< HEAD
    body: lightBackground,
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: lightBackground, 
    darkestDark: lightBackground,
    mediumDark: lightBackground,
    primaryColor: darkBackground, //top part and footer
=======
    // body: '#363537' ,
    // text: '#FAFAFA',
    // toggleBorder: '#6B8096',
    // background: '#999',
    // darkestDark: '#151B2C',
    // mediumDark: '#21293E',
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#1d1d1d',
    secondaryColor: '#242424',
    accentColor: '#F00281',
}

export const blueTheme = {
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#151B2C',
>>>>>>> team3
    secondaryColor: '#21293E',
    accentColor: '#F00281',
}

export const greenTheme = {
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#03444D',
    secondaryColor: '#315D63',
    accentColor: '#FFB300',
}

export const blueGrayTheme = {
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#112A43',
    secondaryColor: '#334E68',
    accentColor: '#B8EFA5',
}

export const orangeTheme = {
    primaryText: '#000',
    secondaryText: '#242424',
    primaryColor: '#FE6F00',
    secondaryColor: '#FFA000',
    accentColor: '#46267F',
}

export const lavenderTheme = {
    primaryText: '#000',
    secondaryText: '#242424',
    primaryColor: '#46267F',
    secondaryColor: '#734C9D',
    accentColor: '#FFB300',
}

export const themeSelection = [ 
    {version: 'light', themePack: lightTheme, type: 'light' },
    {version: 'dark', themePack: darkTheme, type: 'dark'  },
    {version: 'blue', themePack: blueTheme, type: 'dark' },
    {version: 'green', themePack: greenTheme, type: 'dark' },
    {version: 'blue gray', themePack: blueGrayTheme, type: 'dark' },
    {version: 'orange', themePack: orangeTheme, type: 'light' },
    {version: 'lavender', themePack: lavenderTheme, type: 'light' },
];

export const themeVersions = themeSelection.map(function(e) { return e.version; });

