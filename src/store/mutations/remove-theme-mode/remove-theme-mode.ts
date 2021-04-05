import {cache} from '../../cache';

export const removeThemeMode = () => {
  cache.evict({fieldName: 'themeMode'});
};
