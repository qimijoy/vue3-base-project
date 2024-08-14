/**
 * Babel configuration function
 * @param api - The api object exposes everything Babel itself exposes from its index module,
 * along with config-file specific APIs
 * @returns [presets, plugins]
 */
export default function primaryConfig(api) {
	api.cache(true);

	const presets = [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: '3.38',
			},
		],
		'@babel/preset-typescript',
	];

	const plugins = [];

	return {
		presets,
		plugins,
	};
}
