import { Grupo } from "./grupo"

export class Meta {
    id: number = 0
    tipo: string = "";
    valor: number = 0;
    grupo: Grupo|null = null;

    constructor() {

    }

    static from(meta: any): Meta {
        let novaMeta: Meta = new Meta();
        if(meta.id) novaMeta.id = meta.id;
        if(meta.tipo) novaMeta.tipo = meta.tipo;
        if(meta.valor) novaMeta.valor = meta.valor;
        if(meta.grupo) novaMeta.grupo = Grupo.from(meta.grupo);

        return novaMeta;
    }

    toApiObject(): any {
        let objeto: any = {};

        objeto.id = this.id;
        objeto.tipo = this.tipo;
        objeto.valor = this.valor;
        objeto.grupo_id = this.grupo?.id;

        return objeto;
    }
}
