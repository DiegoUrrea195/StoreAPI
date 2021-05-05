import { Image } from "../Domain/Image";
import { ImageRepository } from "../Domain/ImageRepository";
import { readFile, rename } from "fs";
import { ImageError } from "../Domain/ImageError";


export class FileSystemRepository implements ImageRepository{


    public async save(tempPath: string, targetPath: string): Promise<void> {
        
        return new Promise((resolve, reject) => {

            rename(tempPath, targetPath, (err) => {

                if(err) {
                    reject(new ImageError("ERROR_TO_SAVE_IMAGE"));
                }

                resolve();

            })

        });


    }


    public async getByUrl(url: string): Promise<Image> {
        
        return new Promise((resolve, reject) => {

            readFile(url, (err, data) => {
                if(err) {
                    reject(new ImageError("ERROR_TO_GET_IMAGE"));
                }
                
                var image = new Image(url, data);

                resolve(image);

            });

        });

    }

    

}