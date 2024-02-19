import { IsString } from 'class-validator';

export class PostByCategoryDto {
  @IsString()
  name: string;
}
