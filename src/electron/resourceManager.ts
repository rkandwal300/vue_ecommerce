import osUtils from 'os-utils'
import os from 'os'
import fs from 'fs'
import { BrowserWindow } from 'electron';


const POLLING_INTERVAL = 500;

const getCpuUsage = () => new Promise(resolve => osUtils.cpuUsage(resolve))
const getRamUsage = () => 1 - osUtils.freememPercentage();
const getStorageData = () => {
    const stats = fs.statfsSync(process.platform === 'win32' ? 'C://' : '/')
    const total = stats.bsize * stats.blocks;
    const free = stats.bsize * stats.bfree;
    return {
        total: (total / 1_000_000_000),
        usage: 1 - free / total
    }
};
export const getStaticData = () => {
    const totalStorage = getStorageData();
    const cpuModel = os.cpus()[0].model;
    const totalMemoryGB = Math.floor(osUtils.totalmem() / 1024);

    return { totalMemoryGB, cpuModel, totalStorage }
}

export const pollResourses = (mainWindow: BrowserWindow) => {
    setInterval(async () => {
        const cpuUsage = await getCpuUsage();
        const ramUsage = getRamUsage();
        const storage = getStaticData();
        mainWindow.webContents.send('statistics', {
            cpuUsage, ramUsage, storage
        })
    }, POLLING_INTERVAL)
}
