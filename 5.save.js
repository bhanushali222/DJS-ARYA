const fs=require('fs')
const data={temperature:24,voltage:3.7}
fs.writeFileSync('telemetry.json',JSON.stringify(data))
console.log('saved',data)
