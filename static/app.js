var app = require('app'),
	BrowserWindow = require('browser-window'),
	Menu = require('menu'),
	template,
	menu;

require('crash-reporter').start();

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 1360, height: 800});
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// menu
	if (process.platform === 'darwin') {
		template = [{
			label: 'View',
			submenu: [{
				label: 'Reload',
				accelerator: 'Command+R',
				click: function() {
					mainWindow.restart();
				}
			}, {
				label: 'Toggle Full Screen',
				accelerator: 'Ctrl+Command+F',
				click: function() {
					mainWindow.setFullScreen(!mainWindow.isFullScreen());
				}
			}, {
				label: 'Toggle Developer Tools',
				accelerator: 'Alt+Command+I',
				click: function() {
					mainWindow.toggleDevTools();
				}
			}]
		}];

		menu = Menu.buildFromTemplate(template);
		Menu.setApplicationMenu(menu);
	}
	else {
		template = [{
			label: '&View',
			submenu: [{
				label: '&Reload',
				accelerator: 'Ctrl+R',
				click: function() {
					mainWindow.restart();
				}
			}, {
				label: 'Toggle &Full Screen',
				accelerator: 'F11',
				click: function() {
					mainWindow.setFullScreen(!mainWindow.isFullScreen());
				}
			}, {
				label: 'Toggle &Developer Tools',
				accelerator: 'Alt+Ctrl+I',
				click: function() {
					mainWindow.toggleDevTools();
				}
			}]
		}];
		menu = Menu.buildFromTemplate(template);
		mainWindow.setMenu(menu);
	}

	// closing strategy
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
