import {ColorSchemeName} from 'react-native';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export const getTheme = (color: ColorSchemeName) => {
  const isDark = color === 'dark';
  const currentTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return {
    ...currentTheme,
    fonts: configureFonts({
      default: {
        regular: {
          fontFamily: 'sans-serif',
          fontWeight: 'normal',
        },
        medium: {
          fontFamily: 'sans-serif-medium',
          fontWeight: 'normal',
        },
        light: {
          fontFamily: 'sans-serif-light',
          fontWeight: 'normal',
        },
        thin: {
          fontFamily: 'sans-serif-thin',
          fontWeight: 'normal',
        },
      },
    }),
  };
};
