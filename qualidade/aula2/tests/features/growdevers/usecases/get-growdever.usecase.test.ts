import { DatabaseConnection, RedisConnection } from "../../../../src/main/database";
import { GetGrowdeverUseCase } from "../../../../src/app/features/growdever/usecases/get-growdever.usecase";
import { GrowdeverRepository } from "../../../../src/app/features/growdever/repositories/growdever.repository";
import { Growdever } from "../../../../src/app/models/growdever.model";

describe("Get growdever usecase tests", () => {
    beforeAll(async () => {
        await DatabaseConnection.connect();
        await RedisConnection.connect();
    });

    afterAll(async () => {
        await RedisConnection.destroy();
        await DatabaseConnection.destroy();
        return;
    });

    const makeSut = () => {
        const usecase = new GetGrowdeverUseCase(new GrowdeverRepository());
        return usecase;
    };

    test("should return null if growdever does not exist", async () => {
        jest.spyOn(GrowdeverRepository.prototype, "get").mockResolvedValueOnce(null);

        const sut = makeSut();
        const result = await sut.execute("invalid-id");

        expect(result).toBeNull();
    });

    test("should return a valid json data if growdever exists", async () => {
        const grow = new Growdever("abc", 123, 12, []);

        jest.spyOn(GrowdeverRepository.prototype, "get").mockResolvedValueOnce(grow);

        const sut = makeSut();
        const result = await sut.execute("valid-id");

        expect(result).not.toBeNull();
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("cpf");
        expect(result!.id).toEqual(grow.id);
    });
});
