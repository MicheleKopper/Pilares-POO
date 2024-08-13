// 2. Crie a classe Imovel, que possui um endereço e um preço.

export class Imovel {
    public endereco: string
    public preco: number

    
    constructor(endereco: string, preco: number) {
        this.endereco = endereco
        this.preco = preco
    }
}

// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.

export class Novo extends Imovel {

    protected adicional: number

    constructor(endereco: string, preco: number, adicional: number) {
        super(endereco, preco)
        this.adicional = adicional
    }


    // Acesso
    getAdicional(): number {
        return this.adicional;
    }

    setAdicional(adicional: number): void {
        this.adicional = adicional;
    }


    // Impressão
    imprimeValor(): void {
        const total = this.preco + this.adicional

        console.log(`O valor do imóvel novo com adicional é de R$${total}`);
    }
}

// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

export class Velho extends Imovel {
    protected desconto: number

    constructor(endereco: string, preco: number, desconto: number) {
        super(endereco, preco)
        this.desconto = desconto
    }


    // Acesso
    getDesconto(): number {
        return this.desconto;
    }

    setDesconto(desconto: number): void {
        this.desconto = desconto;
    }


    // Impressão
    imprimeValor(): void {
        const total = this.preco - this.desconto

        console.log(`O valor do imóvel velho com desconto é de R$${total}`);
    }
}