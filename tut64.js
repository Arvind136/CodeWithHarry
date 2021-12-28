const fs = require('fs');
let file1 = fs.readFileSync("file1.text", "utf-8");
console.log(file1);

file1 = file1.replace("file", "text");
console.log(file1);

console.log("Creating a new file...");
fs.writeFileSync("Arvind.text", file1);