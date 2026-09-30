// const os = require('os');
// console.log('Operating System Information:');
// console.log('Platform:', `${os.platform()}`);
// console.log('Architecture:', `${os.arch()}`);
// console.log('CPU Cores:', `${os.cpus().length}`);
// console.log('Total Memory:', `${os.totalmem()}`);
// console.log('Free Memory:', `${os.freemem()}`);       



// const path = require('path');
// console.log('Path Information:');
// console.log('Current Directory:', `${__dirname}`);
// const filePath = path.join(__dirname, 'example.txt');
// console.log('File Path:', `${filePath}`);  


// const fs = require('fs');

// //Creating a file
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//   if (err) throw err;
//   console.log('File created successfully!');
// });    

// //Delete a file
// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted successfully!');
// });  


//delete the file after 5 seconds
// setTimeout(() => {
//   fs




// //fs
// const fsP = require('fs/promises');

// async function readFileSync() {
//   try {
//     const data = await fsP.readFile('file.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   };  
// };  

// readFileSync();  

// //Crypto
// const crypto = require('crypto'); 
// const hash = crypto.createHash('sha256');
// hash.update('Hello, World!');
// const digest = hash.digest('hex');
// console.log('SHA-256 Hash:', digest); 


// console.log(crypto.randomUUID());   
 


const dns = require('dns');           
            

