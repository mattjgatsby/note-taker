# Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This applictaion is a simple way to write out and save notes. 
Its clean and simple UI makes it easy to keep track of task and organise your thoughts.
I put this application together in order to work with node.js and routing methods.

[Visit the site!](https://secure-mountain-19804.herokuapp.com/)

## Technology Used
* Node.js
* Express
* Uuidv4
* JavaScript
* CSS
* HTML

## Code Snippet

This is my get for /notes it is given a call back function of readFromFile which takes in an argument of a file location then returns a json object of the data
```JavaScript 
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});
```

## Code Snippet

Here I used JsDoc's @param tag to set up a name, type, and description of the parameters given to the writeToFile function
It helps establish that the parameter of location will be a string that is refering to the file we want to be writing to.
As well it sets value to be an object that we will writting to our file.

``` JavaScript
/**
 *  @param {string} location - this is what file we want
 *  @param {object} value - what we are writting to our file.
 */
const writeToFile = (location, value) =>
    fs.writeFile(location, JSON.stringify(value,null, 5), (err) => 
        err ? console.error(err) : console.info(`\nSuccessfully written to ${location} !`)
        );
```

## Author Links

[Github](https://github.com/mattjgatsby)
[LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)