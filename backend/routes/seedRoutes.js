import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //await Product.deleteOne(); //remove
  //await Product.deleteMany({});
  await Product.remove({}); //remove
  const createdProducts = await Product.insertMany(data.products);

  await User.remove({}); //remove
  const createdUsers = await Product.insertMany(data.Users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
