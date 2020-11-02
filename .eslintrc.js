module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  globals: {
    __static: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // allow anonymous component functions
    'react/display-name': 0,
    // disable prop-types when using typescript
    'react/prop-types': 'off',

    // allow spreading out properties from an object without warnings
    'no-unused-vars': [1, { ignoreRestSiblings: true }],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // allow implicit return types
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': 1
  },

  overrides: [
    {
      files: ['webpack.*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    }
  ]
};
