import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import * as React from 'react';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    newHeading: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  newHeading: React.CSSProperties;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      white: '#FFF',
    },
    secondary: {
      main: '#000',
      white: '#FFF',
    },
    accent: {
      backgroundGrey: '#F9F9F9',
    },
  },
  typography: {
    newHeading: {
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '150%',
    },
    h1: {
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '150%',
    },
    h2: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '150%',
    },
    h3: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '150%',
    },
    fontFamily: '"Open Sans"',
  } as ExtendedTypographyOptions,
} as ThemeOptions);

export default theme;
