import eslintPluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';


export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // 💡 General JavaScript Rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-empty': 'warn',
      'no-multi-spaces': 'error',

      // React rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      // JSX a11y rules
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
  },
];
