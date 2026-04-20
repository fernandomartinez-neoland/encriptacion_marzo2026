import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt'

const saltRounds = 10

export async function registerService(userData) {
    console.log(userData)
    const hashedpass = bcrypt.hash(userData.password, saltRounds);
    console.log("clave hasheada: ", await hashedpass)
    const user = await userModel();
    return user.find({});
}