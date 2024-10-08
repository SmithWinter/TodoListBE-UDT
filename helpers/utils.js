const fs = require('fs');

function writeResponse (httpCode, message , response, data) {
  response.writeHead(httpCode, { 'Content-Type': 'text/plain' });
  response.end(JSON.stringify({
    data,
    "message" : message,
    "code" : httpCode  
  }));
}

function readFileDataJson(tasksFilePath) {
  try {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    } else {
      throw new Error('Could not read tasks file');
    }
  }
};

function writeFileDataJson (filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Data written successfully to file');
  } catch (err) {
    console.error('Could not write data to file', err);
  }
};

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

module.exports = { 
  writeResponse,  
  readFileDataJson, 
  writeFileDataJson,
  generateUID
}