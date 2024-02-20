import { IsString } from 'class-validator';

export class CommandByPostDto {
  @IsString()
  id: string;
}
