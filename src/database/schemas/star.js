/**
 * Schema for a star point(score)
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose from 'mongoose';
import ratingSchema from './rating';

const starSchema = new mongoose.Schema({
  average: { type: Number, required: true, default: 0, min: 0, max: 5 },  // average start point
  ratings: [ { type: ratingSchema, required: true } ]   // rated score by users
});

export default starSchema;
