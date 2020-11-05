module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		mode: 'all',
		content: ['./public/*.html']
	},
	// be sure to clear the .cache directory if you make changes to the items below
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
}
