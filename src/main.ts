// Design Pattern Decorator TS

import { Camiseta } from "./camiseta";
import { CamisetaEstampada } from "./camiseta-estampada";
import { CamisetaPersonalizada } from "./camiseta-personalizada";

const camiseta = new Camiseta('Camiseta de Manga Curta');
const camisetaEstampadaDecorator = new CamisetaEstampada(camiseta);
const camisetaPersonalizadaDecorator = new CamisetaPersonalizada(camiseta);

console.log(camiseta.obterNome());
console.log(camisetaEstampadaDecorator.obterNome());
console.log(camisetaPersonalizadaDecorator.obterNome());
