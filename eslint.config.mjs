import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import parserTs from "@typescript-eslint/parser";

import eslintReact from "eslint-plugin-react";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";
import eslintSonarjs from "eslint-plugin-sonarjs";
import eslintPrettier from "eslint-plugin-prettier";
import stylisticJs from "@stylistic/eslint-plugin-js";
import eslintTypescript from "@typescript-eslint/eslint-plugin";
import eslintImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslintJs.configs.recommended,
});

export default eslintTs.config(
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
    ...compat.extends(
        "plugin:import/typescript",
        "next/core-web-vitals",
        "next/typescript"
    ),
    ...compat.config({
        "env": { 
            "browser": true, 
        },
    }),
    {
        languageOptions: {
            parser: parserTs,
            sourceType: "module",
            ecmaVersion: 11,
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
            
        },
        settings: {
            "import/resolver": {
                typescript: {}
            },
        },
        plugins: {
            react: eslintReact, 
            import: eslintImport,
            "@typescript-eslint": eslintTypescript,  
            sonarjs: eslintSonarjs, 
            "jsx-a11y": eslintJsxA11y,
            "@stylistic/js": stylisticJs,
            prettier: eslintPrettier
        },
        rules: {
            "camelcase": "error",
            "quotes": ["error", "double"],
            "jsx-quotes": ["error", "prefer-double"],
            "no-duplicate-imports": "error",
            "no-console": "warn",
            "prefer-const": "warn",
            "max-len": ["error", { "code": 1200 }],
            "no-unused-vars": "warn",
            "no-undef": "error",
            "prefer-arrow-callback": "error",
            "constructor-super": "error",
            "no-this-before-super": "error",
            "react/react-in-jsx-scope": "off",
            "react/no-unknown-property": "off",
            "react/prop-types": "off",
            "@stylistic/js/spaced-comment": "error",
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/anchor-has-content": "warn",
            "jsx-a11y/img-redundant-alt": "warn",
            "jsx-a11y/no-static-element-interactions": [
                "warn",
                {
                    "handlers": [
                        "onClick",
                        "onMouseDown",
                        "onMouseUp",
                        "onKeyPress",
                        "onKeyDown",
                        "onKeyUp"
                    ],
                    "allowExpressionValues": true
                }
            ],
            "sonarjs/no-duplicate-string": "warn",
            "sonarjs/prefer-immediate-return": "warn",
            "sonarjs/no-useless-catch": "error",
            "sonarjs/no-redundant-jump": "error",
            "sonarjs/no-inverted-boolean-check": "error",
            "sonarjs/prefer-object-literal": "warn",
            "sonarjs/no-all-duplicated-branches": "error",
            "@next/next/no-img-element": "error",
            "@next/next/no-html-link-for-pages": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-empty-function": "error",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/no-empty-interface": "warn",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "interface",
                    "format": ["PascalCase"],
                    "custom": {
                        "regex": "^I[A-Z]",
                        "match": true
                    }
                }
            ],
            "no-magic-numbers": ["warn", {
                "ignore": [1, 0, -1, 2], 
                "ignoreArrayIndexes": true,
                "ignoreDefaultValues": true
                }
            ],
            "import/no-unresolved": "off",
            "import/first": "error",
            "import/no-duplicates": "error",
            "import/newline-after-import": "warn",
            "import/order": [
                "error",
                {
                    "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
                    "newlines-between": "always-and-inside-groups"
                }
            ],
        }
    }
);
