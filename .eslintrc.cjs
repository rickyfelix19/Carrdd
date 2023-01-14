module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['prettier', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['tailwindcss', 'prettier'],
  rules: {}
}
