import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsEnum,
  Default,
} from 'class-validator';

export class CreatePlantDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @Default('happy')
  @IsOptional()
  @IsEnum(['happy', 'sad', 'angry', 'hungry', 'thirsty', 'sick', 'sleeping'])
  mood: string;
}
