module.exports = {
  root: true,
  extends: ['@react-native-community'],
  env: {
    "es6": true
  },
  rules: {
    "quotes": ["error", "double"],
    
    "prettier/prettier": ["off", {
      "trailingComma": "none",
      "bracketSpacing": true,
      "endOfLine": "auto",
      "proseWrap": "never"
  }]
  }
};
