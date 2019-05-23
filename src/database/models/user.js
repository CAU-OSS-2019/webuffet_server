import mongoose from 'mongoose';
import userSchema from '../schemas/user';

export default mongoose.model('User', userSchema);
