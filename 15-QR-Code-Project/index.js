import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
    "message": "Type in your URL:",
    "name": "url",
    "type": "input"
},

]).then(answers => {
    const url = answers.url;
    fs.writeFileSync('url.txt', url);
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    console.log('QR code generated');
})
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log('Prompt couldn\'t be rendered in the current environment');
        }
        else {
            // Something else went wrong
            console.log('Something else went wrong');
        }
    });
