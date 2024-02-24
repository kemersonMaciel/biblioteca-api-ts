import { Body, Controller, Get, Post } from "@nestjs/common";
import { ParticipanteService } from "./participante.service";
import { CreateParticipanteDto } from "./dto/create-participante.dto";

@Controller("participante")
export class ParticipanteController {
  constructor(private readonly participanteService: ParticipanteService) {}
  @Get()
  async findAll() {
    return await this.participanteService.findAll();
  }

  @Post()
  async create(@Body() body: CreateParticipanteDto) {
    return await this.participanteService.create(body);
  }
}
