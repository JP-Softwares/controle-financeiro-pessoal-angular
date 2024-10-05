import { Grupo } from "./grupo"

export class Pessoa {
    id: number = 0
    nome: string = ""
    CPF: string = ""
    email: string = ""
    telefone: string = ""

    constructor() {

    }

    static from(pessoa: any): Pessoa {
        let novaPessoa: Pessoa = new Pessoa();
        if(pessoa.id) novaPessoa.id = pessoa.id;
        if(pessoa.nome) novaPessoa.nome = pessoa.nome;
        if(pessoa.cpf) novaPessoa.CPF = pessoa.cpf;
        if(pessoa.email) novaPessoa.email = pessoa.email;
        if(pessoa.telefone) novaPessoa.telefone = pessoa.telefone;

        return novaPessoa;
    }

    toApiObject(): any {
        let objeto: any = {};

        objeto.id = this.id;
        objeto.nome = this.nome;
        objeto.cpf = this.CPF;
        objeto.email = this.email;
        objeto.telefone = this.telefone;

        return objeto;
    }

    displayValue(): string {
        return this.nome;
    }
}