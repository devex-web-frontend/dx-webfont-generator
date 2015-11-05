var generator = require('./index.js');
var find = require('find');
var options = {
	fontName: 'dxFont',
	files: find.fileSync(/\.svg$/, process.cwd() + '/svg')
};
generator(options);
