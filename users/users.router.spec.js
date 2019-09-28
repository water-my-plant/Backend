const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe("GET /", () => {
  it("should return status 200", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("POST /api/users", () => {
  it("should return JSON", () => {
    return request(server)
      .post("/api/users")
      .send({
        fullname: "testroute",
        username: "testroute",
        password: "abc123",
        phonenumber: "12125555559"
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });

  // it("should return 201", () => {
  //   return request(server)
  //     .post("/api/users")
  //     .send({
  //       username: "testroute",
  //       password: "abc123"
  //     })
  //     .then(res => {
  //       expect(res.status).toBe(201);
  //     });
  // });
});

describe("GET /api/users", () => {
  it("should return list of users", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
