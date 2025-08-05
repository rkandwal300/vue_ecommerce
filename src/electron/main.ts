import { app, BrowserWindow, ipcMain } from 'electron';

import { join } from 'path'
import { isDev } from './utils.js';
import { getStaticData, pollResourses } from './resourceManager.js';
import { getPreloadPath } from './pathResolver.js';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences:{
            preload:getPreloadPath(),
        }
    })
    const fileLocation = (join(app.getAppPath(), 'dist-vue', 'index.html'))
   if(isDev()){
       mainWindow.loadURL('http://localhost:5123')
   } else{
       mainWindow.loadFile(fileLocation)
    }
    pollResourses(mainWindow);
    ipcMain.handle('getStaticsData',()=>{
return getStaticData()
    })
})
