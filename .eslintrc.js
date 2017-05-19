module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    //write your rules here!
    "comma-dangle": ["error", "only-multiline"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "object-curly-spacing": ["error", "always"]
  }
};