import globals from 'globals';
import js from '@eslint/js';
import tsESlint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

import babelParser from '@babel/eslint-parser';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	// GLOBAL IGNORES
	{
		ignores: ['**/dist/*'],
	},
	// FILES TO LINT
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
	},
	// GLOBAL LANGUAGE & LINTER SETTINGS
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: 'error',
		},
	},
	{
		name: 'JS',
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
		rules: js.configs.recommended.rules,
		languageOptions: {
			parser: babelParser,
		},
	},
	{
		name: 'TS',
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsESlint.parser,
		},
	},

	...tsESlint.configs.recommended,
	...pluginVue.configs['flat/essential'],

	{
		name: 'Vue',
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tsESlint.parser,
			},
		},
	},

	eslintPluginPrettierRecommended,
];
