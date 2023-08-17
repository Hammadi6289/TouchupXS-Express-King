import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router(); // seerRouter is an object from express.Router function

seedRouter.get('/', async (req, res) => {
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);

    res.send({ createdProducts, createdUsers });
  } catch (error) {
    res.status(500).send({ error: 'Error seeding the database' });
  }
});
export default seedRouter;

//await User.deleteMany({}); //remove
//await Product.deleteMany({});

//await Product.remove({});
//await User.remove({});
