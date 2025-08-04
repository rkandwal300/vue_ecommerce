import { app, BrowserWindow } from 'electron';

import { join } from 'path'
import { isDev } from './utils.js';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({})
    const fileLocation = (join(app.getAppPath(), 'dist-vue', 'index.html'))
   if(isDev()){
       mainWindow.loadURL('http://localhost:5123')

   } else{
       mainWindow.loadFile(fileLocation)
    }
})
