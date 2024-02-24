import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateParticipanteDto } from "./dto/create-participante.dto";
import { ParticipanteEntity } from "./entities/participante.entity";

@Injectable()
export class ParticipanteService {
  constructor(
    @Inject("PARTICIPANTE_REPOSITORY")
    private participanteRepository: Repository<ParticipanteEntity>
  ) {}

  async findAll() {
    return await this.participanteRepository.find();
  }

  async create(data: CreateParticipanteDto) {
    const permission = this.participanteRepository.create(data);

    const buscaPermission = await this.findByNameGroup(permission.nome);
    if (buscaPermission) {
      throw new ConflictException("O nome da equipe já está cadastrado!");
    }

    return await this.participanteRepository.save(permission);
  }

  async findByNameGroup(nome: string) {
    const participante = await this.participanteRepository.findOne({
      where: { nome },
    });
    return participante;
  }
}
