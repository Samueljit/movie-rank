import Role from '../models/role.js';
import User from '../models/user.js';

export const isValidRole = async(role = '') => {

  const foundRole = await Role.findOne({ role });
  if (!foundRole) {
    throw new Error(`The role: ${ role } is not registered in the DB`);
  }
};

export const hasRepeatedEmail = async(email = '') => {

  const foundEmail = await User.findOne({ email });
  if (foundEmail) {
    throw new Error(`The email: ${ email } already exists in the DB`);
  }
};

export const isExistingUser = async(id) => {

  const foundID = await User.findById(id).where('active',true).exec();
  if (!foundID) {
    throw new Error(`There is not a user with id: ${ id }`);
  }
};
