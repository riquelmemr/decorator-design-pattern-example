import { CamisetaDecorator } from "./camiseta-decorator";

class CamisetaEstampada extends CamisetaDecorator {
  obterNome(): string {
    return this.produto.obterNome() + ' Estampada';
  }

  obterPreco(): number {
    return this.produto.obterPreco() + 5;
  }
}

export { CamisetaEstampada };

