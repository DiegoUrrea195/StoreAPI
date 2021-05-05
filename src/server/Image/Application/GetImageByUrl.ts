import { Image } from "../Domain/Image";
import { ImageRepository } from "../Domain/ImageRepository";

export class GetImageByUrl {

    public repository: ImageRepository;

    public constructor(repository: ImageRepository) {
        this.repository = repository;
    }

}