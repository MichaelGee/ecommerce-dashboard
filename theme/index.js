import {defaultTheme} from 'evergreen-ui';

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
          borderRadius: 5,
          height: 40,
          backgroundColor: '#21295C',
          _hover: {
            backgroundColor: '#141938',
          },
          _disabled: {
            backgroundColor: '#2f3b83',
          },
        },
        secondary: {
          color: '#000',
          paddingX: 25,
          paddingY: 0,
          borderRadius: 5,
          height: 40,
          backgroundColor: 'transparent',
          background: '0 0',
          border: 'none',
          boxShadow:
            'inset rgb(0 0 0 / 15%) 0 0 0 1px',
          _hover: {
            boxShadow:
              'inset rgb(0 0 0 / 30%) 0 0 0 1px',
          },
        },
        minimal: {
          paddingX: 25,
          paddingY: 0,
          borderRadius: 5,
          height: 40,
        },
      },
    },
    Input: {
      ...defaultTheme.components.Input,
      appearances: {
        default: {
          // borderColor: 'rgba(0,0,0,.2)',
          background: '#e8f0f3',
          _focus: {
            borderColor: '#06f',
          },
          _invalid: {
            borderColor: '#D14343',
          },
        },
      },
    },
  },
  colors: {
    brand01: '#30011E',
    brand02: '#2B011B',
    brand03: '#260118',
    brand04: '#220115',
    brand05: '#1D0112',
    brand06: '#18010F',
    brand07: '#13000C',
    brand08: '#0E0009',
    brand09: '#0A0006',
    brand10: '#050003',
    contrast01: '#451A35',
    contrast02: '#59344B',
    contrast03: '#6E4D62',
    contrast04: '#6E4D62',
    contrast05: '#836778',
    contrast06: '#98808f',
    contrast07: '#AC99A5',
    contrast08: '#C1B3BC',
    contrast09: '#D6CCD2',
    contrast10: '#EAE6E9',
    black: '#000000',
    white: '#ffffff',
    info: '#3498db',
    success: '#07bc0c',
    warning: '#f1c40f',
    error: '#e74c3c',
  },

  fontFamily: {
    logo: 'Dancing Script, cursive',
  },

  //FONT SIZE
  textSize: {
    tiny: '0.625rem',
    caption: '0.75rem',
    body: '0.875rem',
    paragraph: '0.875rem',
    subheader: '1.063rem',
    title: '1.375rem',
    heading: '1.625rem',
    large: '2rem',
    larger: '2.5rem',
    largest: '3rem',
  },
  // SPACING
  // MEDIA QUERIES
  // BORDER RADIUS
  rounded: {
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
  },
};

export default theme;
