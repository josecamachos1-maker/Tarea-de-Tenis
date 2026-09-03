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
  it("Deberia devolver 15-15", () => {
    let tennis = new Tennis()
    expect(tennis.score(15,15)).toEqual( "15-15");
  });
});
describe("tennis", () => {
  it("Deberia devolver 30-15", () => {
    let tennis = new Tennis()
    expect(tennis.score(30,15)).toEqual( "30-15");
  });
});

describe("tennis", () => {
  it("Deberia devolver 30-30", () => {
    let tennis = new Tennis()
    expect(tennis.score(30,30)).toEqual( "30-30");
  });
});
describe("tennis", () => {
  it("Deberia devolver 40-30", () => {
    let tennis = new Tennis()
    expect(tennis.score(40,30)).toEqual( "40-30");
  });
});
describe("tennis", () => {
  it("Deberia devolver 40-40", () => {
    let tennis = new Tennis()
    expect(tennis.score(40,40)).toEqual( "Deuce");
  });
});
describe("tennis", () => {
  it("Deberia devolver Advantage Player 1", () => {
    let tennis = new Tennis()
    expect(tennis.score(50,40)).toEqual( "Advantage Player 1");
  });
});
describe("tennis", () => {
  it("Deberia devolver Game for Player 1", () => {
    let tennis = new Tennis()
    expect(tennis.score(60,40)).toEqual( "Game for Player 1");
  });
});


