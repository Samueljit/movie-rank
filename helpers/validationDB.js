import Role from '../models/role.js';
import User from '../models/user.js';

export const isValidRole = async(role = '') => {

    const foundRole = await Role.findOne({ role });
    if ( !foundRole ) {
        throw new Error(`The role: ${ role } is not registered in the DB`);
    }
}

export const hasRepeatedEmail = async( email = '' ) => {

    // Verificar si el correo existe
    const foundEmail = await User.findOne({ email });
    if ( foundEmail ) {
        throw new Error(`Cambiar por The email: ${ email } already exists in the DB`);
    }
}
