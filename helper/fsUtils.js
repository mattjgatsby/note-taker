const fs = require('fs');
const util = require ('util');
//util.promisify is a node method that takes a function following the common error-first call back style
//here we give util.promisify the CB of fs.readFile 
const readFromFile = util.promisify(fs.readFile);

//the @param tag used in this file allows me to have a name, type, and description of a function parameter
//it requires the name of the parameter you're documenting, you can also include the parameters type in curly brackets as I did.
//the @param comes from JsDoc, which is an API documentation generator for JavaScript
//JsDoc is useful for type safey. The block tag @param helps to set things like location to be a primitive type of string
// providing a description of what the parameter does is also helpful make the code more readable and less confusing to deal with errors

/**
 *  @param {string} location - this is what file we want
 *  @param {object} value - what we are writting to our file.
 */
const writeToFile = (location, value) =>
// here we set up a const writeToFile that does some work. given the already set up parameters of location and value
//those params are set to be a string and object respetively
// we then give this function work of a fs.writeFile which is a node.js method
//it is used asynchronously to write the specified data to a file.
//here we give it an argument of our {string} location as the file
//then the data of a JSON.stringified value. That {object} value is what we want to be writing to the location
    fs.writeFile(location, JSON.stringify(value,null, 5), (err) => 
        err ? console.error(err) : console.info(`\nSuccessfully written to ${location} !`)
        );

// next we set up a different set of params
//param {object} object, and {string} file. The object is the object that is created we want to appened to our data
//the file is where we are looking to have that object appened to

/**
 *  @param {object} object this is the object we want to append
 *  @param {string} file where we save our data
 */
const readAndAppend = (object, file) => {
//we set up a readAndAppend function that takes in our given params
//it then does the work of a fs.readFile.
//readFile is a node method that is used to read through the given file
//in this method we give it an argument of the file name which is set up in our {string} file
//next the encoding which the default value is utf8
//and finally a call back function. Here our CB is creating a const dataP which is set to a JSON.parse of the data
//we then push the newly set up dataP into our {object} object
//finally we call on our writeToFile function passing the file and newly JSON parsed data
    fs.readFile(file, 'utf8', (err, data) => {
            const dataP = JSON.parse(data);
            dataP.push(object);
            writeToFile(file, dataP);
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };