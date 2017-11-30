// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

function deleteFile(){
  if(isAFile(path)){
    fs.unlinkSync(path);
    return true;
  }
  return false;
}

function isAFile(path){
  const stats = fs.lstatsSync(path);
  return stats.isFile();
}

module.exports = deleteFile
