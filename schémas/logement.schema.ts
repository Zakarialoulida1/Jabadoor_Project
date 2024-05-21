import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum Etat {
  BON = 'Bon état',
  NEUF = 'Neuf',
  A_RENOVER = 'À rénover',
  // Add other states as needed
}

@Schema()
export class Logement extends Document {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  localisation: string;


  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;


  @Prop({ required: true })
  telephone: string;
  @Prop({ required: true })
  nbrChambres: number;

  @Prop()
  salon?: number;

  @Prop()
  cuisine?: number;

  @Prop({ required: true })
  superficie: string;

  @Prop({ required: true })
  pieces: number;

  @Prop({ required: true })
  sallesDeBain: number;

  @Prop({ required: true, enum: Etat })
  etat: Etat;

  @Prop()
  terrasse?: boolean;

  @Prop()
  garage?: boolean;

  @Prop()
  ascenseur?: boolean;

  @Prop()
  concierge?: boolean;

  @Prop()
  meuble?: boolean;

  @Prop()
  salonEuropeen?: boolean;

  @Prop()
  climatisation?: boolean;

  @Prop()
  doubleVitrage?: boolean;

  @Prop()
  cuisineEquipee?: boolean;

  @Prop()
  refrigerateur?: boolean;

  @Prop()
  four?: boolean;

  @Prop()
  tv?: boolean;

  @Prop()
  microOndes?: boolean;
}

export const LogementSchema = SchemaFactory.createForClass(Logement);
