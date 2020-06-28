import { BrowserWindow, app } from "electron";
import { compAFunc } from "../../ComponentA";
import { compBFunc } from "../../ComponentB";

// This is the example from the electron quickstart
function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    // and load the index.html of the app.
    win.loadFile('build/index.html')
  
    // Open the DevTools.
    win.webContents.openDevTools()

    // Run our functions from other projects!
    compAFunc();
    compBFunc();
}

app.whenReady().then(createWindow)