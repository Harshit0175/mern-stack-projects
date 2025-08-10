import express from 'express'
import { login, logout, register } from '../controller/authcontroller.js'
const authrouter =express.Router();
authrouter.post('/signup',upload.single('image'), register);
authrouter.post('/login',login);
authrouter.get('/logout',logout);

export default authrouter
