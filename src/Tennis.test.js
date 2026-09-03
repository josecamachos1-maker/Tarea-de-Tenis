import { Tennis } from "./Tennis.js";

describe("tennis", () => {
  it("Deberia devolver love love", () => {
    let tennis = new Tennis()
    expect(tennis.score(0,0)).toEqual("Love-Love");
  });
});

describe("tennis", () => {
  it("Deberia devolver 15-0", () => {
    let tennis = new Tennis()
    expect(tennis.score(15,0)).toEqual( "15-Love");
  });
});
describe("tennis", () => {
  it("Deberia devolver 30-0", () => {
    let tennis = new Tennis()
    expect(tennis.score(30,0)).toEqual( "30-Love");
  });
});
describe("tennis", () => {
  it("Deberia devolver 30-0", () => {
    let tennis = new Tennis()
    expect(tennis.score(30,0)).toEqual( "30-Love");
  });
});


