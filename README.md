##dx-webfont-generator

```
var generator = require('./index.js');
var find = require('find');
var options = {
	fontName: 'myFontName',
	files: ['svg/icon-add.svg', 'svg/icon-remove.svg']
};
generator(options);
```
`files` option is _required_
All other default options would be replaced by provided.
Default options: 
```
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

```
Take a look at [webfonts-generator](https://github.com/sunflowerdeath/webfonts-generator) for more options