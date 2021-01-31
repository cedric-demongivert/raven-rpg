import LightningFS from '@isomorphic-git/lightning-fs'
import * as http from './http'
import git from 'isomorphic-git'

const fs = new LightningFS('fs')
const pfs = fs.promises

git.clone({
  fs,
  http,
  dir: '/corvus-data',
  url: 'http://gitea.cedric-demongivert.com/cdemongivert/corvus.git'
}).then(async function() {
  console.log(await pfs.readdir('/corvus-data'))
})
