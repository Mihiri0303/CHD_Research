module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["eslint:recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},
	ignorePatterns: ["db/migrations"],
	plugins: ["prettier"],
	rules: {
		"no-unused-vars": ["warn", { args: "all", destructuredArrayIgnorePattern: "^_" }],
		"prettier/prettier": [
			"error",
			{
				printWidth: 120,
				useTabs: true,
				endOfLine: "auto",
			},
		],
	},
};
