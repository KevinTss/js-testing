const assert = require("chai").assert;
const expect = require("chai").expect;

const Calcul = require("../lib/Calcul");

describe("Calcul", () => {
  it("Should be a function", () => {
    expect(Calcul.add).to.be.a("function");
  });
  it("Should add numbers", () => {
    assert.equal(Calcul.add(2, 2, 3), 7);
  });
  it("Should add numbers wrong", () => {
    expect(Calcul.add(2, 2, 3)).to.not.equal(6);
  });
});
