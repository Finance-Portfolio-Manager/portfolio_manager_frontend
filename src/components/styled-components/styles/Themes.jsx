/*
Carlos Galvan Jr 

A collection of themes to be used with style-components module to set the color scheme

NOTE: The only reason it is labeled a jsx file instead of js is because vscode-styled-components plugin
doesnt work without it. Basically I just want the color picker
*/

export const lightTheme = {
    // body: '#FFF',
    // text: '#000',
    // toggleBorder: '#FFF',
    // background: '#363537',
    // darkestDark: '#FFF',
    // mediumDark: '#000000',
    primaryText: '#1f1f1f',
    secondaryText: '#333333',
    primaryColor: '#3f434b',
    secondaryColor: '#f1f1f1',
    accentColor: 'rgb(59, 101, 255)',
    gradientPair: 'rgba(215, 39, 219, 0.7)',
    // gradientStyle: `linear-gradient(109.36deg, rgba(215, 39, 219, 0.7) -4.44%, ${theme.accentColor}, #C4C4C4 !important`
    type: 'light'
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
    // body: '#363537' ,
    // text: '#FAFAFA',
    // toggleBorder: '#6B8096',
    // background: '#999',
    // darkestDark: '#151B2C',
    // mediumDark: '#21293E',
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#131313',
    secondaryColor: '#242424',
    accentColor: '#d60047',
    gradientPair: '#ff7300',
    type: 'dark'
}

export const blueTheme = {
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#151B2C',
    secondaryColor: '#21293E',
    accentColor: '#f00249',
    gradientPair: '#da5deb',
    type: 'dark'

}

export const greenTheme = {
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#03444D',
    secondaryColor: '#315D63',
    accentColor: '#ff3c00',
    gradientPair: '#ffb375',
    type: 'dark'
}

export const blueGrayTheme = {
    primaryText: '#FFF',
    secondaryText: '#ffe1e1',
    primaryColor: '#0d1e2f',
    secondaryColor: '#334E68',
    accentColor: '#46a19a',
    gradientPair: '#0400ff',
    type: 'dark'

}

// export const orangeTheme = {
//     primaryText: '#000',
//     secondaryText: '#242424',
//     primaryColor: '#FE6F00',
//     secondaryColor: '#FFA000',
//     accentColor: '#46267F',
//     type: 'light'

// }

export const lavenderTheme = {
    primaryText: '#ffffff',
    secondaryText: '#efe1ff',
    primaryColor: '#46267F',
    secondaryColor: '#734C9D',
    accentColor: '#FFB300',
    gradientPair: '#ff7300',
    type: 'dark'

}

//add themes here to appear in the toggle list
export const themeSelection = [ 
    {version: 'light', themePack: lightTheme, type: 'light' },
    {version: 'dark', themePack: darkTheme, type: 'dark'  },
    {version: 'blue', themePack: blueTheme, type: 'dark' },
    {version: 'green', themePack: greenTheme, type: 'dark' },
    {version: 'blue gray', themePack: blueGrayTheme, type: 'dark' },
    // {version: 'orange', themePack: orangeTheme, type: 'light' },
    // {version: 'lavender', themePack: lavenderTheme, type: 'light' },
    // {version: 'ugly rose', themePack: uglyRoseTheme, type: 'light' },
];
//returns theme names only
export const themeVersions = themeSelection.map(function(e) { return e.version; });

