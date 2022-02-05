import pkg from 'mongoose';
const { Schema, model } = pkg;

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'The role is required']
    }
});


 export default model( 'Role', RoleSchema );
