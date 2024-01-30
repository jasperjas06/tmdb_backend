import multer from "multer";
import path from "path"

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);  
      if (ext !== ".jpeg" && ext !== ".jpg" && ext !== ".png" ) {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
 
});  