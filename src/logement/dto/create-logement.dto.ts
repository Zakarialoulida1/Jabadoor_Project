import { IsString, IsNumber, IsBoolean, IsOptional, IsMongoId } from 'class-validator';

export class CreateLogementDto {
  @IsString()
  nom: string;

  @IsString()
  localisation: string;

  @IsMongoId()
  category: string;

  @IsString()
  telephone: string;

  @IsNumber()
  nbrChambres: number;

  @IsOptional()
  @IsNumber()
  salon?: number;

  @IsOptional()
  @IsNumber()
  cuisine?: number;

  @IsString()
  superficie: string;

  @IsNumber()
  pieces: number;

  @IsNumber()
  sallesDeBain: number;

  @IsString()
  etat: string;

  @IsOptional()
  @IsBoolean()
  terrasse?: boolean;

  @IsOptional()
  @IsBoolean()
  garage?: boolean;

  @IsOptional()
  @IsBoolean()
  ascenseur?: boolean;

  @IsOptional()
  @IsBoolean()
  concierge?: boolean;

  @IsOptional()
  @IsBoolean()
  meuble?: boolean;

  @IsOptional()
  @IsBoolean()
  salonEuropeen?: boolean;

  @IsOptional()
  @IsBoolean()
  climatisation?: boolean;

  @IsOptional()
  @IsBoolean()
  doubleVitrage?: boolean;

  @IsOptional()
  @IsBoolean()
  cuisineEquipee?: boolean;

  @IsOptional()
  @IsBoolean()
  refrigerateur?: boolean;

  @IsOptional()
  @IsBoolean()
  four?: boolean;

  @IsOptional()
  @IsBoolean()
  tv?: boolean;

  @IsOptional()
  @IsBoolean()
  microOndes?: boolean;
}
