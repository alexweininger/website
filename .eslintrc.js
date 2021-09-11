module.exports = {
    "eslintConfig": {
        "extends": ["react-app", "shared-config"],
        "overrides": [
            {
                "files": ["**/*.ts?(x)"],
                "rules": {
                    "@typescript-eslint/no-unused-vars": "off"
                }
            }
        ]
    }
}