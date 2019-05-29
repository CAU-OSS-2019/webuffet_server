/**
 * Schema for a published theme
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose from 'mongoose';
import themeSchema from './theme';
import starSchema from './star';

const publicationSchema = new mongoose.Schema({
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },   // user who published
  theme: { type: themeSchema, required: true },
  star: { type: starSchema, required: true },   // star point(score) of published theme
  download: { type: Number, required: true, default: 0 }  // number of download
});

export default publicationSchema;
