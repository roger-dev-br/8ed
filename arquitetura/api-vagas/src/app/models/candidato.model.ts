import { TipoUser, User } from './user.model';

export class Admin extends User {
    constructor(nome: string, username: string, senha: string) {
        super(nome, username, senha, TipoUser.Candidato);
    }
}
