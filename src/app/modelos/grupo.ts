import { Pessoa } from "./pessoa"

export class Grupo {
    id: number = 0
    nome: string = ""
    descricao: string = ""
    pessoa: Pessoa|null = null;

    constructor() {
        
    }

    static from(grupo: any): Grupo {
        let novoGrupo: Grupo = new Grupo();
        if(grupo.id) novoGrupo.id = grupo.id;
        if(grupo.nome) novoGrupo.nome = grupo.nome;
        if(grupo.descricao) novoGrupo.descricao = grupo.descricao;
        if(grupo.pessoa) novoGrupo.pessoa = Pessoa.from(grupo.pessoa);

        return novoGrupo;
    }

    toApiObject(): any {
        let objeto: any = {};

        objeto.id = this.id;
        objeto.nome = this.nome;
        objeto.descricao = this.descricao;
        objeto.pessoa_id = this.pessoa?.id;

        return objeto;
    }
}