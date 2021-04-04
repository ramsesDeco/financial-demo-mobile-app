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
  rules: {
    'react-native/no-inline-styles': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [0],
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
