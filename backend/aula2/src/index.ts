import { Animal, Ave, Reptil } from "./classes";

const papagaio = new Ave("Ave", 2, "Louro");
papagaio.emitirSom();
papagaio.autonomiaDeVoo = 2;
// papagaio.morrer();

const jacare = new Reptil("Reptil", 4, "Jacare");
jacare.nascer();
jacare.quilosDeCarnePorDia = 3;
jacare.emitirSom();

function queAnimalSouEu(animal: Animal) {
  console.log(animal.imprimirNome());
}

queAnimalSouEu(jacare);
queAnimalSouEu(papagaio);
