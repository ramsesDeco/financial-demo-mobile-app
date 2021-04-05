import {ColorSchemeName, Appearance} from 'react-native';
import {cache} from '../../cache';
import {GET_THEME_MODE} from '../../queries';

export const toggleThemeMode = () => {
  const data = cache.readQuery({
    query: GET_THEME_MODE,
  }) as {themeMode: ColorSchemeName};

  const currentColor = data?.themeMode || Appearance.getColorScheme();

  const themeMode = currentColor === 'light' ? 'dark' : 'light';

  cache.writeQuery({
    query: GET_THEME_MODE,
    data: {
      themeMode,
    },
  });
};
