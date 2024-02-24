import { Module } from "@nestjs/common";
import { ParticipanteProviders } from "./participante.providers";
import { DatabaseModule } from "src/database/database.module";
import { ParticipanteService } from "./participante.service";
import { ParticipanteController } from "./participante.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [ParticipanteController],
  providers: [...ParticipanteProviders, ParticipanteService],
})
export class ParticipanteModule {}
