import { Banco } from "./classes/banco";
import { Conta } from "./classes/conta";
import { Correntista } from "./classes/correntista";

const felipe = new Correntista("Felipe", "55", "email@email.com", "443434");

const conta1 = new Conta("3332", felipe, 1000);
const conta2 = new Conta("22323", felipe, 0);

const banco1 = new Banco("1", "Banco um", [conta1, conta2]);
console.log(JSON.stringify(banco1));
