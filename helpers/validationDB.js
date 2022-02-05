import Role from '../models/role.js';
import User from '../models/user.js';

export const isValidRole = async(role = '') => {

    const foundRole = await Role.findOne({ role });
    if ( !foundRole ) {
        throw new Error(`The role: ${ role } is not registered in the DB`);
    }
}

export const emailRegistered = async( email = '' ) => {

    // Verificar si el correo existe
    const existEmail = await User.findOne({ email });
    if ( existEmail ) {
        throw new Error(`The email: ${ email } is already exist in the DB`);
    }
}
