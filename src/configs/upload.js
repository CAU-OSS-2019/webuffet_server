import multer from 'multer';

const file_filter = (req, file, callback) => {
  const allowed_types = ['jpg', 'jpeg', 'png', 'gif'];

  let type_array = file.mimetype.split('/');
  let file_type = type_array[1];
  
  if (allowed_types.includes(file_type)) {
    callback(null, true);
  } else {
    req.fileValidationError = "you can upload only jpg, jpeg, png, gif files";
    callback(null, false);
  }
};

const upload = multer({
  fileFilter: file_filter,
  limits: {
    fileSize: 3 * 1024 * 1024
  }
}).single('thumbnail');

export default upload;
