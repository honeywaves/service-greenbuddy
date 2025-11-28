import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreatePlantDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  @IsIn(['happy', 'sad', 'angry', 'hungry', 'thirsty', 'sick', 'sleeping'])
  mood?: string;
}
