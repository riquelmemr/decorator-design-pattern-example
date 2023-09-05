import { Produto } from "./produto";

class Camiseta extends Produto {
  nome: string;

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  obterNome(): string {
    return this.nome;
  }

  obterPreco(): number {
    return 10;
  }
}

export { Camiseta };
