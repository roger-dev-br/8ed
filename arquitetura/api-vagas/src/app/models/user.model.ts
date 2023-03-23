import { v4 } from 'uuid';

export enum TipoUser {
    Admin = 'A',
    Recrutador = 'R',
    Candidato = 'C',
}

export class User {
    private _id: string;
    constructor(
        private _nome: string,
        private _username: string,
        private _senha: string,
        private _tipo: TipoUser,
        private _nomeEmpresa?: string
    ) {
        this._id = v4();
    }

    public get id() {
        return this._id;
    }
    public get nome() {
        return this._nome;
    }

    public get username() {
        return this._username;
    }
    public get nomeEmpresa() {
        return this._nomeEmpresa;
    }
    public get tipo() {
        return this._tipo;
    }

    public static create(
        nome: string,
        username: string,
        senha: string,
        tipo: TipoUser,
        nomeEmpresa?: string
    ) {
        const user = new User(nome, username, senha, tipo, nomeEmpresa);

        return user;
    }

    public toJson() {
        return {
            id: this._id,
            nome: this.nome,
            username: this._username,
            nomeEmpresa: this.nomeEmpresa,
            tipo: this.tipo,
        };
    }
}
