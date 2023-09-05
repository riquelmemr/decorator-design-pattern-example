import { Produto } from "./produto";

abstract class CamisetaDecorator extends Produto {
  constructor(protected produto: Produto) {
    super();
  }

  obterNome(): string {
    return this.produto.obterNome();
  }

  obterPreco(): number {
    return this.produto.obterPreco();
  }
}

export { CamisetaDecorator };

