import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  post: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500, { message: 'Comment is too long.' })
  comment: string;
}
