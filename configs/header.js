window.CONFIGS = CONFIGS || {}
CONFIGS.HEADER = { // https://github.com/resoai/TileBoard/wiki/Header-configuration
	styles: {
		padding: '15px 130px 0',
		fontSize: '22px'
	},
	right: [],
	left: [
		{
			type: HEADER_ITEMS.DATETIME,
			dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
		}
	]
}