import {defaultTheme} from 'evergreen-ui'


const theme = {
   ...defaultTheme,
// COLORS

// fontFamilies:{
//   ...defaultTheme.fontFamilies,
//   display: '"Koh Santepheap", cursive',
//   mono: '"Koh Santepheap", cursive',
//   ui: '"Koh Santepheap", cursive'
// },

components: {
   ...defaultTheme.components,
   Button: {
     ...defaultTheme.components.Button,
     appearances: {
       primary: {
         color: 'white',
         paddingX: 25,
         paddingY: 0,
         borderRadius: 10,
         height: 40,
         lineHeight: 46,
         backgroundColor: '#06f',
         _hover: {
           backgroundColor: '#005ce6',
         },
       },
       secondary: {
         color: '#000',
         paddingX: 25,
         paddingY: 0,
         borderRadius: 10,
         height: 40,
         backgroundColor: 'transparent',
         background: '0 0',
         border: 'none',
         boxShadow: 'inset rgb(0 0 0 / 15%) 0 0 0 1px',
         lineHeight: 46,
         _hover: {
            boxShadow: 'inset rgb(0 0 0 / 30%) 0 0 0 1px'
         }
         
       },
     },
   },
   Input: {
     ...defaultTheme.components.Input,
     appearances:{
       default:{
        _focus:{ 
          boxShadow: 'inset #06f 0 0 0 1px,inset #fff 0 0 0 100px',
        }
        
       }
     }
   }
 },
 colors : {
    brand01 : "#30011E",
    brand02 : "#2B011B",
    brand03 : "#260118",
    brand04 : "#220115",
    brand05 : "#1D0112",
    brand06 : "#18010F",
    brand07 : "#13000C",
    brand08 : "#0E0009",
    brand09 : "#0A0006",
    brand10 : "#050003",
    contrast01 : "#451A35",
    contrast02 : "#59344B",
    contrast03 : "#6E4D62",
    contrast04 : "#6E4D62",
    contrast05 : "#836778",
    contrast06 : "#98808f",
    contrast07 : "#AC99A5",
    contrast08 : "#C1B3BC",
    contrast09 : "#D6CCD2",
    contrast10 : "#EAE6E9",
    black: "#000000",
    white: "#ffffff",
    info: '#3498db',
    success: '#07bc0c',
    warning: "#f1c40f",
    error: '#e74c3c'
 },

 fontFamily : {
    logo: 'Dancing Script, cursive',
 },

//FONT SIZE
 textSize : {
     tiny: "0.625rem",
     caption: "0.75rem",
     body: "0.875rem",
     paragraph: "0.875rem",
     subheader: "1.063rem",
     title: "1.375rem",
     heading: "1.625rem",
     large: "2rem",
     larger: "2.5rem",
     largest: "3rem",
    
 },
// SPACING
// MEDIA QUERIES
// BORDER RADIUS
 rounded:{
    1: '2px',
    2: '4px',
    3: '6px',
    4: '8px',
    5: '10px',
    6: '12px',
    7: '14px',
    8: '16px',
    9: '18px',
    10: '20px',
    11: '22px',
    12: '24px',
    13: '26px',
    14: '28px',
    15: '30px',
    16: '32px',
    17: '34px',
    18: '36px',
    19: '38px',
    20: '40px',
    21: '42px',
    22: '44px',
    23: '46px',
    24: '48px',
    25: '50px',
 }
}



export default theme;




   
// import { css } from "@emotion/react";

// const breakpoints = {
//   sm: "576px",
//   md: "768px",
//   lg: "992px",
//   xl: "1200px",
//   xxl: "1400px",
// };

// const mq = Object.keys(breakpoints).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${breakpoints[label]}) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// const font = {
//   size: {
//     largest: "7.0rem",
//     larger: "4.0rem",
//     large: "3.0rem",
//     big: "2.3rem",
//     medium: "1.55rem",
//     normal: "1.6rem",
//     small: "1.4rem",
//     tiny: "1.2rem",
//     tiniest: "1.0rem",
//     inherit: "inherit",
//   },
//   weight: {
//     bold: 600,
//     bolder: 800,
//     light: 200,
//     normal: 300,
//     large: 500,
//     thin: 100,
//   },
// };

// const colors = {
//   background: "#F3F6FE",
//   blue: "#1A73E8",
//   darkBlue: "#1F263E",
//   red: "#E60023",
//   white: "hsl(0, 0%, 100%)",
//   button: "#e3f2fd",
//   green: "#01C0AA",
//   red: "#EE2E6B"
// };

// const space = {
//   one: "1rem",
//   two: "1.5rem",
//   three: "2rem",
//   four: "2.5rem",
//   five: "3rem",
// };

// const darkTheme = {
//   colors,
//   font,
//   mq,
//   font,
//   space,
// };

// const lightTheme = {
//   colors,
//   font,
//   mq,
//   font,
//   space,
// };

// export const theme = (mode) => (mode === "light" ? lightTheme : darkTheme);