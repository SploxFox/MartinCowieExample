"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var ComponentA_1 = require("../../ComponentA");
var ComponentB_1 = require("../../ComponentB");
// This is the example from the electron quickstart
function createWindow() {
    // Create the browser window.
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // and load the index.html of the app.
    win.loadFile('build/index.html');
    // Open the DevTools.
    win.webContents.openDevTools();
    // Run our functions from other projects!
    ComponentA_1.compAFunc();
    ComponentB_1.compBFunc();
}
electron_1.app.whenReady().then(createWindow);
