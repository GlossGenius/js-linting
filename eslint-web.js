const base = require('./eslint');

module.exports = {
    ...base,
    "extends": [
        "next",
        ...base.extends,
    ],
    "settings": {
        "import/resolver": "webpack"
      }
}