import multer from 'multer';

const file_filter = (req: Express.Request, file: Express.Multer.File, callback: any) => {
  const allowed_types = ['jpg', 'jpeg', 'png', 'gif'];

  let type_array = file.mimetype.split('/');
  let file_type = type_array[1];
  
  if (allowed_types.includes(file_type)) {
    callback(null, true);
  } else {
    callback(new Error("you can upload only jpg, jpeg, png, gif files"));
  }
};

const upload = multer({
  fileFilter: file_filter,
  limits: {
    fileSize: 3 * 1024 * 1024   // 3MB
  }
}).single('thumbnail');

export default upload;
