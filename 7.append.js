const fs=require('fs')
let data=JSON.parse(fs.readFileSync('telemetry.json','utf8'))
if(!Array.isArray(data))data=[data]
const newEntry={temperature:25,voltage:3.6}
data.push(newEntry)
fs.writeFileSync('telemetry.json',JSON.stringify(data))
console.log('appended',newEntry)
