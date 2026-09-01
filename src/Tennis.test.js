import tennis, { Tennis } from "./Tennis.js";

describe("tennis", () => {
  it("Deberia devolver love love", () => {
    expect(Tennis(0,0)).toEqual("Love-Love");
  });
});

describe("tennis", () => {
  it("Deberia devolver 15-0", () => {
    expect(Tennis(15,0)).toEqual( 15+"-"+0);
  });
});
describe("tennis", () => {
  it("Deberia devolver 30-0", () => {
    expect(Tennis(30,0)).toEqual( 30+"-"+0);
  });
});


