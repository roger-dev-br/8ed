import { Animal, Casa } from "./classes";

const cachorro = new Animal("Cachorro");
cachorro.voa = false;
cachorro.patas = 4;
cachorro.emitirSom("AuAu");
cachorro.voar();
console.log(cachorro);

const gato = new Animal("Gato");
gato.voa = false;
gato.patas = 4;
gato.emitirSom("Miau");
if (cachorro.voa) {
  cachorro.voar();
}
console.log(gato);

const aguia = new Animal("Águia");
aguia.voa = true;
aguia.patas = 2;
console.log(aguia);
aguia.voar();

const casaRoger = new Casa(5, 7, 7);
casaRoger.toString();

const casaAndre = new Casa(10, 15, 11);
casaAndre.toString();
casaAndre.depositar(500);
