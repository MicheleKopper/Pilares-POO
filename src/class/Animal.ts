// 3. Dado o seguinte diagrama: cachorro, cavalo, gato
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

// Atributos - nome, especie, idade
// Métodos - correr, brincar, dormir

export class Animal {

    private _nome: string
    private _especie: string
    private _idade: number

    constructor(nome: string, especie: string, idade: number) {
        this._nome = nome
        this._especie = especie
        this._idade = idade
    }

    public correr(): void {
        console.log(`${this._nome} está correndo`);
    }

    public brincar(): void {
        console.log(`${this._nome} gosta de brincar`);
    }

    public dormir(): void {
        console.log(`${this._nome} gosta de dormir?`);
    }

    // get torna público, é possível visualizar (leitura) o atributo, mas não alterar, get precisa retornar algo

    public getNome(): string {
        return this._nome
    }

    public getEspecie(): string {
        return this._especie
    }

    public getIdade(): number {
        return this._idade
    }
}

export class Cachorro extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, 'Cachorro', idade)
    }

    public latir(): void {
        console.log(`${this.getNome()} está latindo!`);
    }
}

export class Cavalo extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, 'Cavalo', idade);
    }

    public trotar(): void {
        console.log(`${this.getNome()} está trotando!`);
    }
}

export class Gato extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, 'Gato', idade);
    }

    public miar(): void {
        console.log(`${this.getNome()} está miando!`);
    }
}