module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: 3.38,
			},
		],
		'@babel/preset-typescript',
	],
};
