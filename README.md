# GlossGenius's JS Linting config

Comes with ready to use
- eslint config
- prettier config

for JS/TS + React projects.

## Setting up
1) Import this package by 
`yarn add -D https://github.com/GlossGenius/js-linting`

2) Add any unmet peer deps manually

3) For eslint, add `"extends": "gg-linting",` to your `.eslintrc.json`

4) For prettier, add `"prettier": "eslint-config-gg-linting/prettier",` to your package.json and your prettierrc file should `only` contain `"eslint-config-gg-linting/prettier"`.

5) Setup any eslint and prettier ignore files as needed