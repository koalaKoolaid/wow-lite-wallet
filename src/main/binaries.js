import { join as joinPath, dirname } from 'path';
import { exec } from 'child_process';

import appRootDir from 'app-root-dir';

const IS_PROD = process.env.NODE_ENV === 'production';
console.log('Prod: ' + IS_PROD);

import getPlatform from './get-platform';

const execPath = IS_PROD ?
    joinPath(dirname(appRootDir.get()), '..', 'Resources', 'bin') :
    joinPath(appRootDir.get(), 'resources', getPlatform(), 'bin');


const cli_binaries = {
    'linux': 'wowlite',
    'mac': 'wowlite',
    'win': 'wowlite.exe'
}

export const cliPath = `${joinPath(execPath, cli_binaries[getPlatform()])}`;
export const platform = getPlatform();
console.log('binaries.js - clipPath: ' + cliPath);
