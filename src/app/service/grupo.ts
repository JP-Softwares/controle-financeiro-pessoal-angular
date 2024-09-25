import { Pessoa } from "./pessoa"

export class Grupo {
    id: number = 0
    nome: string = ""
    descricao: string = ""
    pessoa: Pessoa = new Pessoa()

    constructor() {

    }
}