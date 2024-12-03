module.exports = {
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  extends: ['universe/native', 'plugin:react-hooks/recommended', 'expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-duplicate-imports': 'error',
    quotes: ['error', 'single', { avoidEscape: true }], // single quote unless using interpolation
    'react/jsx-uses-react': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/react-in-jsx-scope': 'off',
    'sort-imports': ['off'],
    'import/order': ['off'],
  },
};
