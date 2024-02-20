import { BadRequestException, Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ImageService {
  addImage(file: Express.Multer.File) {
    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Invalid file types.');
    }

    const filename = nanoid() + path.extname(file.originalname);
    const uploadPath = path.join(__dirname, '..', '..', 'images', filename);

    fs.writeFileSync(uploadPath, file.buffer);
    const imageUrl = `/images/${filename}`;
    return { path: imageUrl };
  }
}
