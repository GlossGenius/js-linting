module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": ["react", "simple-import-sort", "prettier"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      { "allow": "as-needed", "extensions": [".tsx", ".jsx"] }
    ],
    "import/no-default-export": "warn",
    "import/no-anonymous-default-export": "off",
    "no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
    "no-use-before-define": ["error"],
    "no-unused-vars": ['error', { varsIgnorePattern: '_' }],
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": ["error"],
    "react/jsx-props-no-spreading": [
      "error",
      {
        "html": "ignore",
        "exceptions": [
          "TextField",
          "Dropdown",
          "PortfolioImage",
          "Image",
          "Service"
        ]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "packageDir": "./",
        "devDependencies": [
          "src/test/*",
          "**/*{.,_}{test,spec}.{ts,tsx,js.jsx}",
          "src/setupTests.ts"
        ]
      }
    ],
    "prefer-template": "error",
    "quotes": ["error", "double"],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "newline-after-var": "error",
    "react/prop-types": ["error", { "skipUndeclared": true }] // only lint on files that have prop types
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        // prop types not needed in TS
        "react/prop-types": "off",
        "react/require-default-props": "off",

        // turn off js rules to enable ts rules
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ['error', { varsIgnorePattern: '_' }],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          { "allow": ["arrowFunctions"] }
        ],

        // allow any usage since adding types is larger endeavor atm
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-call": "off"
      },
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "project": ["tsconfig.json"] // this is the main override here
      },
      "extends": [
        // ts plugins only added here
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ]
    }
  ]
}
  