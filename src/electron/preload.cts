const electron = require('electron');
electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatistics: (callback: (stat: any) => void) => electron.ipcRenderer.on('statistics', (_: any, data: any) => {
        callback(data)

    }),
    getStaticData: () =>electron.ipcRenderer.invoke("getStaticsData")
})