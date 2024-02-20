import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommandDto {
  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  post: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500, { message: 'Command is too long.' })
  command: string;
}
