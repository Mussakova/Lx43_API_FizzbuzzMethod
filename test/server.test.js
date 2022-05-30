const app = require("../lib/server");
const request = require("supertest");

describe("Testing para el server js", ()=>{
    test("1. Probando fizbuzzService /v1/explorers/v1/fizzbuzz/:numberx", ()=>{
        const response = request(app).get("/v1/explorers/v1/fizzbuzz/1");
        expect(response.method).toBe("GET");
    });
});