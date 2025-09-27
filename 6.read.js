const fs=require('fs')
const raw=fs.readFileSync('telemetry.json','utf8')
const json=JSON.parse(raw)
console.log('read',json)
