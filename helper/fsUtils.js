const fs = require('fs');
const util = require ('util');
const readFromFile = util.promisify(fs.readFile);

/**
 *  @param {string} location - this is what file we want
 *  @param {object} value - what we are writting to our file.
 */
const writeToFile = (location, value) =>
    fs.writeFile(location, JSON.stringify(value,null, 5), (err) => 
        err ? console.error(err) : console.info(`\nSuccessfully written to ${location} !`)
        );
/**
 *  @param {object} object this is the object we want to append
 *  @param {string} file where we save our data
 */
const readAndAppend = (object, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
        } else {
            const dataP = JSON.parse(data);
            dataP.push(object);
            writeToFile(file, dataP);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };