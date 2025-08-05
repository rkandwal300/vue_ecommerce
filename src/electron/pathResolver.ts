import { app } from 'electron'
import {join} from'path'
import { isDev } from './utils.js'


export const getPreloadPath=()=>join(
    app.getAppPath(), isDev()? ".":"..",
    '/dist-electron/preload.cjs'
)