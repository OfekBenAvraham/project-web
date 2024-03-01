import { IsString } from 'class-validator';

export class CommentByPostDto {
  @IsString()
  id: string;
}
