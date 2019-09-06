const electron = require('electron')
const { dialog } = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({width: 800, height: 600})

	// and load the index.html of the app.

	// アプリ起動時間と有効期限の判定をする
	var todayObj = new Date();	// new Date('yyyy-mm-ddThh:mm:ss');
	var today	 = todayObj.getTime();	// 1970/1/1午前0時からの現在までのミリ秒

	// new Date('2019-09-05T15:57:00');のように0埋めが必要
	var endObj	 = new Date('2019-09-30T23:59:59');	// 終了日の指定
	var end	 = endObj.getTime();	// 1970/1/1午前0時からの終了日までのミリ秒

	if(today <= end){
		// 有効期限の範囲内
		console.log("今日は終了日より前です");
    mainWindow.loadURL(`file://${__dirname}/index.html`)
  }
	else{
		// 有効期限切れ
		console.log("今日は終了日より後です");
		dialog.showErrorBox("有効期限が切れています。", "有効期限は"+endObj.getFullYear()+"/"+(endObj.getMonth()+1)+"/"+endObj.getDate()+" です。");
		app.quit();		
	}

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
