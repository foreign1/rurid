# Rurid

A package for generating unique, random, and human-readable IDs.

## Dependencies
This is a zero-dependency package

## Install via NPM
```javascript
npm install rurid
```

## Usage
```javascript
const rurid = require("rurid").default;
const separators = ["-", "_", "."];
const language = "en";

// Generate readable ID
const id = rurid(language, separators);
```

## Arguments
```lang``` - specifies the language for generating the ID. 
The lang argument is optional and defaults to "en" for English, when not provided.

```separators``` - an array of characters to separate multiword IDs. 
The separator array is optional and defaults to ["-", "_", "."] when not provided.
