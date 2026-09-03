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
describe("tennis", () => {
  it("Deberia devolver Love-15", () => {
    let tennis = new Tennis()
    expect(tennis.score(0,15)).toEqual( "Love-15");
  });
});
describe("tennis", () => {
  it("Deberia devolver Love-30", () => {
    let tennis = new Tennis()
    expect(tennis.score(0,30)).toEqual("Love-30");
  });
});
describe("tennis", () => {
  it("Deberia devolver Love-40", () => {
    let tennis = new Tennis()
    expect(tennis.score(0,40)).toEqual("Love-40");
  });
});
describe("tennis", () => {
  it("Deberia devolver 15-30", () => {
    let tennis = new Tennis()

    expect(tennis.score(15,30)).toEqual("15-30");
  });
});
describe("tennis", () => {
  it("Deberia devolver 15-40", () => {
    let tennis = new Tennis()

    expect(tennis.score(15,40)).toEqual("15-40");
  });
});
describe("tennis", () => {
  it("Deberia devolver 30-40", () => {
    let tennis = new Tennis()

    expect(tennis.score(30,40)).toEqual("30-40");
  });
});
describe("tennis", () => {
  it("Deberia devolver 40-Love", () => {
    let tennis = new Tennis()

    expect(tennis.score(40,0)).toEqual("40-Love");
  });
});
describe("tennis", () => {
  it("Deberia devolver 40-15", () => {
    let tennis = new Tennis()

    expect(tennis.score(40,15)).toEqual("40-15");
  });
});
describe("tennis", () => {
  it("Deberia devolver Advantage Player 2", () => {
    let tennis = new Tennis()

    expect(tennis.score(40,50)).toEqual("Advantage Player 2");
  });
});
describe("tennis", () => {
  it("Deberia devolver Game for Player 2", () => {
    let tennis = new Tennis()

    expect(tennis.score(40,60)).toEqual("Game for Player 2");
  });
});
describe("tennis", () => {
  it("Deberia volver a Deuce", () => {
    let tennis = new Tennis()

    expect(tennis.score(50,50)).toEqual("Deuce");
  });
});
describe("tennis", () => {
  it("Deberia devolver Advantage Player 1 despues de Deuce", () => {
    let tennis = new Tennis()

    expect(tennis.score(60,50)).toEqual("Advantage Player 1");
  });
});
describe("tennis", () => {
  it("Deberia devolver Advantage Player 2 despues de Deuce", () => {
    let tennis = new Tennis()

    expect(tennis.score(50,60)).toEqual("Advantage Player 2");
  });
});

