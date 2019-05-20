/**
 * Schema for a each rating
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // user who rate
  score: { type: Number, required: true, min:0, max:5 }  // rated score
});

export default ratingSchema;
