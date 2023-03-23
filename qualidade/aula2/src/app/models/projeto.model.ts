import { Growdever } from "./growdever.model";
import { v4 as createUuid } from "uuid";

export class Projeto {
    private _id: string;

    constructor(private _nome: string, private _indAtivo: boolean, private _growdever: Growdever) {
        this._id = createUuid();
    }

    public get id() {
        return this._id;
    }

    public get nome() {
        return this._nome;
    }

    public get indAtivo() {
        return this._indAtivo;
    }

    public get growdever() {
        return this._growdever;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set indAtivo(value: boolean) {
        this._indAtivo = value;
    }

    public set growdever(value: Growdever) {
        this._growdever = value;
    }

    public static create(id: string, nome: string, indAtivo: boolean, growdever: Growdever) {
        const project = new Projeto(nome, indAtivo, growdever);
        project._id = id;

        return project;
    }

    public toJson() {
        return {
            id: this.id,
            nome: this.nome,
            indAtivo: this.indAtivo,
            growdever: this.growdever.toJson(),
        };
    }
}
