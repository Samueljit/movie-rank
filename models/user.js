
import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = Schema({
    username: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'the password is required'],
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        allowed: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
});



UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}

export default model( 'User', UserSchema );
