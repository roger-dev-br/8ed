import { api } from "./index";

class PetsDataService {
  async getAll() {
    return await api.get("/pets");
  }

  async getOne(codigo: number) {
    return await api.get(`/pets/${codigo}`);
  }

  async create(pet: any) {
    return await api.post("/pets", {
      nome: pet.nome,
      observacao: pet.observacao,
    });
  }
}

// Criando uma instancia da Classe de Dados
const petsService = new PetsDataService();
// Exportando a instancia
export { petsService };
