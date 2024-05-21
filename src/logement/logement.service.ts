import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logement } from 'schémas/logement.schema';
import { CreateLogementDto } from './dto/create-logement.dto';

@Injectable()
export class LogementService {
  constructor(@InjectModel(Logement.name) private logementModel: Model<Logement>) {}

  async create(createLogementDto: CreateLogementDto): Promise<Logement> {
    const createdLogement = new this.logementModel(createLogementDto);
    return createdLogement.save();
  }

  async findAll(): Promise<Logement[]> {
    return this.logementModel.find().populate('category').exec();
  }
}
