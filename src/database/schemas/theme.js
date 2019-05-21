/**
 * Schema for a customized style for website
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose from 'mongoose';
 
const themeSchema = new mongoose.Schema({
  url: { type: String, required: true },    // url of customized website
  style_data: { type: mongoose.Schema.Types.Mixed },    // customized style data
  title: { type: String },
  thumbnail: { type: String },  // path of thumbnail image file
});

export default themeSchema;
