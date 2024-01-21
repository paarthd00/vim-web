"use server"
import fs from 'fs';

export default async function getFiles():Promise<string[]>{
  return new Promise((resolve, reject) => {
    fs.readdir('./', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

