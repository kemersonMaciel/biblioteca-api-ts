import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsNotEmpty } from "class-validator";

export class CreateParticipanteDto {
  @IsNotEmpty({
    message: "Adicione a imagem do seu time",
  })
  imagem: string;

  @IsNotEmpty({
    message: "Adicione o nome do seu time",
  })
  nome: string;

  @ArrayMaxSize(6, {
    message: "Adicione até 6 jogadores",
  })
  @ArrayMinSize(5, {
    message: "Adicione 5 jogadores",
  })
  jogadores: string[];

  @IsNotEmpty({
    message: "Adicione um telefone de contato",
  })
  telefone: string;

  @IsNotEmpty({
    message: "Adicione um email de contato",
  })
  email: string;
}
