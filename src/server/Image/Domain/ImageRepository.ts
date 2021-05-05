import { Image } from "./Image";

export interface ImageRepository {

    save(tempPath: string, targetPath: string): void; 

    getByUrl(url: string): Promise<Image>;

}