/**
 * Schema for a customized style for website
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose from 'mongoose';

const themeSchema = new mongoose.Schema({
  hash_id: { type: String, required: true },
  url: { type: String, required: true },            // url of customized website
  style_data: { type: String, required: true },     // customized style data
  title: { type: String, required: true },
  thumbnail: { type: String },                      // path of thumbnail image file
  edited_date: { type: Date, default: Date.now }    // last edited date
});

export default themeSchema;