module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts", "types"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "react-refresh",
    "react-hooks",
    "react",
    "@typescript-eslint",
    "import",
    "prettier",
    "jsx-a11y",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "comma-dangle": 0,
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/quotes": "off",
    "react/react-in-jsx-scope": 0,
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        singleQuote: false,
        jsxBracketSameLine: false,
        bracketSameLine: false,
      },
    ],
  },
};
