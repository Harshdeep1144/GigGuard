import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please add a name'] 
  },
  email: { 
    type: String, 
    required: [true, 'Please add an email'],
    unique: true 
  },
  password: { 
    type: String, 
    required: [true, 'Please add a password'] 
  },
  company: { type: String, default: '' },
  phone: { type: String, default: '' },
  profilePic: { type: String, default: '' },
  experience: { type: String, default: '' },
  address: {
    street: { type: String, default: '' },
    landmark: { type: String, default: '' },
    pincode: { type: String, default: '' },
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
