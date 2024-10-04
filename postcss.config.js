export default {
	plugins: {
		autoprefixer: {},
		doiuse: {
			onFeatureUsage(usageInfo) {
				console.log(usageInfo.message);
			},
		},
		cssnano: {
			preset: 'default',
		},
	},
};
