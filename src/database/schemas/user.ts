/**
 * Schema for a user
 * 
 * @author H.Chihoon
 * @copyright 2019 WEBuffet
 */

import mongoose, { Document } from 'mongoose';
import themeSchema, { ThemeDoc } from './theme';

export interface UserDoc extends Document {
  account_id: string,
  email: string,
  themes?: Array<ThemeDoc>
}

const userSchema = new mongoose.Schema({
  account_id: { type: String, required: true, unique: true },   // hash id of google account
  email: { type: String, required: true, lowercase: true },     // google email
  themes: [ { type: themeSchema } ]             // all themes which are created by this user
});

export default userSchema;
