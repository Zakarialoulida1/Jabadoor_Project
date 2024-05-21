import { Controller, Post, Body, Get } from '@nestjs/common';
import { LogementService } from './logement.service';
import { CreateLogementDto } from './dto/create-logement.dto';

@Controller('logements')
export class LogementController {
  constructor(private readonly logementService: LogementService) {}

  @Post()
  async create(@Body() createLogementDto: CreateLogementDto) {
    return this.logementService.create(createLogementDto);
  }

  @Get()
  async findAll() {
    return this.logementService.findAll();
  }
}
