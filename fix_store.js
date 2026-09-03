const fs = require('fs');  
const content = fs.readFileSync('api/_lib/store.ts', 'utf8');  
console.log(JSON.stringify(content.substring(5000, 5200)));  
