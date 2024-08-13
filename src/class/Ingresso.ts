// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()

export abstract class Ingresso {
    protected valor: number

    constructor(valor: number) {
        this.valor = valor
    }

    abstract imprimeValor(): void
}


// a. crie uma classe Normal, que herda Ingresso..
// Extends a classe Normal herda todas as infos do Ingresso (herença)
export class Normal extends Ingresso {

    constructor(valor: number) {
        super(valor) // Super chama o construtor pai
    }

    imprimeValor(): void {
        console.log(`Ingresso normal R$ ${this.valor}`);
    }
}


// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.

export class Vip extends Ingresso {

    protected valorAdicional: number

    constructor(valor: number, valorAdicional: number) {
        super(valor)
        this.valorAdicional = valorAdicional
    }

    imprimeValor(): void {
        const total = this.valor + this.valorAdicional

        console.log(`Ingresso vip R$ ${total}`);
    }

}


// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional. 

export class Camarote extends Ingresso {

    protected valorAdicional: number

    constructor(valor: number, valorAdicional: number) {
        super(valor)
        this.valorAdicional = valorAdicional
    }

    imprimeValor(): void {
        const total = this.valor + this.valorAdicional

        console.log(`Ingresso camarote R$ ${total}`);
    }
}