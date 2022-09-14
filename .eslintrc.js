module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    'comma-dangle': ['warn', 'never'],
    'no-shadow': 'off',
    'no-undef': 'off',
    semi: 'off'
  }
}
