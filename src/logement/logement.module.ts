import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogementService } from './logement.service';
import { LogementController } from './logement.controller';
import { Logement, LogementSchema } from 'schémas/logement.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Logement.name, schema: LogementSchema }])],
  controllers: [LogementController],
  providers: [LogementService],
})
export class LogementModule {}
