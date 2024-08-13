import { Normal, Vip, Camarote } from "./class/Ingresso";
import { Novo, Velho } from "./class/Imovel";
import { Animal, Cachorro, Cavalo, Gato } from "./class/Animal";

console.log();
console.log('---------------------- Atividade 01 ----------------------');
console.log();


const normal = new Normal(20);
normal.imprimeValor()

const vip = new Vip(20, 10)
vip.imprimeValor()

const camarote = new Camarote(30, 20)
camarote.imprimeValor()




console.log();
console.log('---------------------- Atividade 02 ----------------------');
console.log();

const novo = new Novo('Rua M', 50000, 2000)
novo.imprimeValor()

const velho = new Velho('Rua A', 30000, 4000)
velho.imprimeValor()




console.log();
console.log('---------------------- Atividade 03 ----------------------');
console.log();

const animal = new Animal('Theodoro', 'Canino', 9)

animal.correr()
animal.brincar()
animal.dormir()

const cachorro = new Cachorro('Rexis', 2);
cachorro.correr()
cachorro.latir()

const cavalo = new Cavalo('Búfallo', 15);
cavalo.correr() 
cavalo.trotar()

const gato = new Gato('Salén', 3);
gato.correr()
gato.miar()