import { ArrayMaxSize, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(300, { message: 'Title is too long.' })
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  process: string;

  @ArrayMaxSize(3)
  @IsString({ each: true })
  tags: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
