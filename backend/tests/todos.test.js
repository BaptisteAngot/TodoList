const request = require("supertest");
const app = require("../app/server");

describe("Test de l'API Ping", () => {
    it("Devrait répondre avec un statut 200", async () => {
        const res = await request(app).get("/ping");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("pong");
    });
});
