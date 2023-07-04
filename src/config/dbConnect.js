import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:lfs123@teste.vhm25nb.mongodb.net/teste');

let db = mongoose.connection;

export default db;