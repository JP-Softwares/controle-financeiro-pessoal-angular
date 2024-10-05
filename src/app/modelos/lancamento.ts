import { categoriaLancamento } from "./categoriaLancamento"
import { Grupo } from "./grupo"
import { tipoLancamento } from "./tipoLancamento"

export class Lancamento {
    id: number = 0
    nome: string = ""
    descricao: string = ""
    data: Date|null = null
    tipo: tipoLancamento|null = null
    valor: number = 0
    categoria: categoriaLancamento|null = null
    grupo: Grupo|null = null

    constructor() {

    }

    static from(lancamento: any): Lancamento {
        let novoLancamento: Lancamento = new Lancamento();
        if(lancamento.id) novoLancamento.id = lancamento.id;
        if(lancamento.nome) novoLancamento.nome = lancamento.nome;
        if(lancamento.descricao) novoLancamento.descricao = lancamento.descricao;
        if(lancamento.data) novoLancamento.data = new Date(lancamento.data);
        if(lancamento.tipo) novoLancamento.tipo = lancamento.tipo;
        if(lancamento.valor) novoLancamento.valor = lancamento.valor;
        if(lancamento.categoria) novoLancamento.categoria = lancamento.categoria;
        if(lancamento.grupo) novoLancamento.grupo = Grupo.from(lancamento.grupo);

        return novoLancamento;
    }

    toApiObject(): any {
        let objeto: any = {};

        objeto.id = this.id;
        objeto.nome = this.nome;
        objeto.descricao = this.descricao;
        objeto.data = this.data;
        objeto.tipo = this.tipo;
        objeto.valor = this.valor;
        objeto.categoria = this.categoria;
        // objeto.grupo_id = this.grupo?.id;
        objeto.grupo = this.grupo?.toApiObject();

        return objeto;
    }
}
