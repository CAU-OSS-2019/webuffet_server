/**
 * Schema for a user
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose from 'mongoose';
import themeSchema from './theme';

const userSchema = new mongoose.Schema({
  account_id: { type: String, required: true, unique: true },   // hash id of google account
  email: { type: String, required: true, lowercase: true },     // google email
  name: { type: String, required: true },                       // google user name
  themes: [ { type: themeSchema, required: true } ]             // all themes which are created by this user
});

export default userSchema;
