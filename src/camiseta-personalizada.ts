import { CamisetaDecorator } from "./camiseta-decorator";

class CamisetaPersonalizada extends CamisetaDecorator {
  obterNome(): string {
    return this.produto.obterNome() + ' Personalizada';
  }

  obterPreco(): number {
    return this.produto.obterPreco() + 20;
  }
}

export { CamisetaPersonalizada };
