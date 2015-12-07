var app = require('app'),
	BrowserWindow = require('browser-window');

require('crash-reporter').start();

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({ fullscreen: true });
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// closing strategy
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
