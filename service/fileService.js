const uuid = require("uuid");
const path = require("path")
const fs = require('fs');

class FileService {
  saveFile(file) {
    console.log(file);
    
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("uploads", fileName);
      
      fs.writeFileSync(filePath, Buffer.from(file.image.data, 'base64'));

      return fileName;
      
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FileService();
