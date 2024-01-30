require('dotenv').config();
import {v2 as cloudinary} from 'cloudinary';
const cloud = cloudinary.config({
    // cloud_name: process.env.CLOUDINARY_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: 'dxbes4v75',
    api_key: '995821619138789',
    api_secret:'3P07AQMiuJSXJcQUvrhh1-oX0f4',
});

export default cloud