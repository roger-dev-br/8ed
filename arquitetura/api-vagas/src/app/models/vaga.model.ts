import { v4 } from 'uuid';
import { Recrutador } from './recrutador.model';

export class Vaga {
    private _id: string;

    constructor(
        private _descricao: string,
        private _nomeEmpresa: string,
        private _dtLimite: Date,
        private _ativo: boolean,
        private _recrutador: Recrutador,
        private _maxCandidatos?: number
    ) {
        this._id = v4();
    }

    public get id() {
        return this._id;
    }
    public get descricao() {
        return this._descricao;
    }
    public get nomeEmpresa() {
        return this._nomeEmpresa;
    }
    public get dtLimite() {
        return this._dtLimite;
    }
    public get ativo() {
        return this._ativo;
    }
    public get recrutador() {
        return this._recrutador;
    }
    public get maxCandidatos() {
        return this._maxCandidatos;
    }

    public static create(
        id: string,
        descricao: string,
        empresa: string,
        dtLimite: Date,
        ativo: boolean,
        recrutador: Recrutador,
        maxCandidatos?: number
    ) {
        const vaga = new Vaga(descricao, empresa, dtLimite, ativo, recrutador, maxCandidatos);
        vaga._id = id;

        return vaga;
    }

    public toJson() {
        return {
            id: this.id,
            descricao: this.descricao,
            empresa: this.nomeEmpresa,
            dtLimite: this.dtLimite,
            ativo: this.ativo,
            recrutador: this.recrutador,
            maxCandidatos: this.maxCandidatos,
        };
    }
}
