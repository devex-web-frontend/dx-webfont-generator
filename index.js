var webfontsGenerator = require('webfonts-generator');
var objectAssign = require('object-assign');

module.exports = generate;

var defaults = {
	dest: 'dist/',
	types: ['woff', 'ttf', 'eot', 'svg'],
	startCodepoint: 0xe000,
	html: true,
	htmlTemplate: 'templates/html.hbs',
	cssTemplate: 'templates/css.hbs',
	templateOptions: {
		classPrefix: '',
		baseClass: 'icon'
	}
};

function generate(options) {
	if (!options.files) {
		console.log('There are not enough options');
		return;
	}
	options = objectAssign({}, defaults, options);
	webfontsGenerator(options, function(err) {
		if (err) {
			console.log(err);
			return
		}
		console.log('Successfully generated font ' + options.fontName);
	});
}
