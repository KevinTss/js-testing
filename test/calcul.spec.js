const assert = require("chai").assert;

const Calcul = require("../lib/Calcul");

describe("Calcul", () => {
  it("Should add numbers", () => {
    assert.equal(Calcul.add(2, 2, 3), 7);
  });
});
