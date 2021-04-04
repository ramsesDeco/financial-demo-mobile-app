module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    '@react-native-community',
  ],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': [
      0,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
  plugins: ['prettier'],
};
