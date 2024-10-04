import primaryRules from '@qimijoy/stylelint-config/configs/primary.js';

export default {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard', 'stylelint-config-standard-less', 'stylelint-config-standard-scss'],

	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,
	allowEmptyInput: true,
	cache: true,

	overrides: [
		{
			files: ['**/*.html'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.less'],
			customSyntax: 'postcss-less',
		},
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
		{
			files: ['**/*.vue'],
			extends: ['stylelint-config-standard-vue'],
		},
	],

	rules: {
		...primaryRules.rules,
	},
};
