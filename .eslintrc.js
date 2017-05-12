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
    "comma-dangle": [2, "never"],
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "indent": ["warn", 2, { "SwitchCase": 1 }]
  }
};