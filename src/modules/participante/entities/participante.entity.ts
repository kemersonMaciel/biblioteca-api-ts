import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "participantes", schema: "acesso" })
export class ParticipanteEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  imagem: string;

  @Column()
  nome: string;

  @Column("varchar", { array: true })
  jogadores: string[];

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: () => "now()" })
  create_at: Date;

  @Column({ default: () => "now()" })
  update_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
