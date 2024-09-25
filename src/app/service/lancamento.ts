import { Grupo } from "./grupo"

export class Lancamento {
    id: number = 0
    nome: string = ""
    descricao: string = ""
    data: Date = new Date()
    tipo: string = ""
    valor: number = 0
    categoria: string = ""
    grupo: Grupo = new Grupo()

    constructor() {

    }
}
