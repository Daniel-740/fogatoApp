module.exports = {
	root: true,
	extends: [
		'@react-native',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
		'no-mixed-spaces-and-tabs': 0,
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		eqeqeq: ['error', 'always'],
	},
};
