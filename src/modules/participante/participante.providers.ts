import { DataSource } from "typeorm";
import { ParticipanteEntity } from "./entities/participante.entity";

export const ParticipanteProviders = [
  {
    provide: "PARTICIPANTE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ParticipanteEntity),
    inject: ["DATA_SOURCE"],
  },
];
