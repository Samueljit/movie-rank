import { request, response } from 'express';
import bcrypt from 'bcrypt';
const {hashSync}  = bcrypt;
import User from '../models/user.js';

export const usersPost = async (req = request, res = response) => {

  const {username, email, password, role} = req.body;
  const user = new User({ username, email, password: hashSync(password, 8), role });
   
  await user.save();

  res.status(201).json({
    user
  });
};

export const usersGetAll = async (_req = request, res = response) => {

  const query = { active: true };
  const [ total, users ] = await Promise.all([
    User.countDocuments(query),
    User.find(query)
  ]);

  res.json({
    total,
    users
  });    
};

export const usersGet = async (req = request, res = response) =>{

  const { id } = req.params;
  const user = await User.findById(id).where('active',true).exec();
  if (!user) {
    throw new Error(`There is not a user with id: ${ id }`);
  }
                    
  res.json(user);

};

export const usersPut = async (req = request, res = response) => {

  const { id } = req.params;
  const { active, role, uuid, ...data } = req.body;

  const user = await User.findByIdAndUpdate(id, data);

  res.status(200).json(user);
};

export const usersDelete = async (req = request, res = response) => {

  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, {active: false});

  res.status(200).json({
    message: `the user with the id: ${id} was removed from the DB`,
    user
  });
};
