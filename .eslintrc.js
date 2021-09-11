module.exports = {
    "extends": ["react-app"],
    "overrides": [
        {
            "files": ["**/*.ts?(x)"],
            "rules": {
                "@typescript-eslint/no-unused-vars": "off",
                "react-hooks/exhaustive-deps": "off"
            }
        }
    ]
}