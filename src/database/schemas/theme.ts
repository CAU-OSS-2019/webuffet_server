/**
 * Schema for a customized style for website
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose, { Document } from 'mongoose';

export interface ThemeDoc extends Document {
  url: string,
  style_data?: object,
  title?: string,
  edited_date: Date,
  thumbnail?: string
}

const themeSchema = new mongoose.Schema({
  url: { type: String, required: true },    // url of customized website
  style_data: { type: mongoose.Schema.Types.Mixed },    // customized style data
  title: { type: String },
  edited_date: { type: Date, default: Date.now, required: true },  // last edited date
  thumbnail: { type: String }  // thumbnail image url
});

export default themeSchema;
