const fs = require('fs');


// Writes the string 'Hello, World!' to a file named 'message.txt'
fs.writeFileSync('message.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// Reads the contents of the file 'message.txt' and logs it to the console
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Deletes the file 'message.txt'
fs.unlink('message.txt', (err) => {
    if (err) throw err;
    console.log('The file has been deleted!');
});

// Reads the contents of the current directory and logs the file names to the console
fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log(files);
});

// Creates a new directory named 'test'
fs.mkdir('test', (err) => {
    if (err) throw err;
    console.log('The directory has been created!');
});

// Deletes the directory 'test'
fs.rmdir('test', (err) => {
    if (err) throw err;
    console.log('The directory has been deleted!');
});

// Renames the file 'message.txt' to 'message2.txt'
fs.rename('message.txt', 'message2.txt', (err) => {
    if (err) throw err;
    console.log('The file has been renamed!');
});





