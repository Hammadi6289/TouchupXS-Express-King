import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { isAdmin, isAuth } from '../utils.js';
import dotenv from 'dotenv';
dotenv.config();

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.single('file'),
  async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            console.error('Cloudinary Upload Error:', error);
            reject(error);
          }
        });

        // Log messages to help identify issues
        console.log('Uploading stream...');

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    // Sending a response
    res.send('File uploaded successfully!');
  }
);

export default uploadRouter;
