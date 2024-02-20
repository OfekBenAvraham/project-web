import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('upload')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  addImage(@UploadedFile() file: Express.Multer.File) {
    return this.imageService.addImage(file);
  }
}
