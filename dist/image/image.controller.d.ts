/// <reference types="multer" />
import { ImageService } from './image.service';
export declare class ImageController {
    private imageService;
    constructor(imageService: ImageService);
    addImage(file: Express.Multer.File): {
        path: string;
    };
}
