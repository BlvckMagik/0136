import React from 'react';
import { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';

import { palette, breakpoints, typography, overrides } from './theme';

const ThemeProvider = args => {
  const { children } = args;

  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = overrides;

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
