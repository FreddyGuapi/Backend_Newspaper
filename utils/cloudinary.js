import {v2 as cloudinary} from 'cloudinary';
import "dotenv/config";

const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true
})

export async function uploadImage (filePath){
   return await cloudinary.uploader.upload(filePath,{
    folder: 'Newspaper'
   })
}

export async function deleteImage(publicId){
    return await cloudinary.uploader.destroy(publicId)
}
