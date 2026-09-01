import tennis, { Tennis } from "./Tennis.js";

describe("tennis", () => {
  it("Deberia devolver love love", () => {
    expect(Tennis(0,0)).toEqual("Love-Love");
  });
});


