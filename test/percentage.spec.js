const assert = require("assert");

const Percentage = require("../lib/Percentage");

describe("Percentage", () => {
  describe("Evoluation", () => {
    it("Should give an evolution", () => {
      assert.equal(Percentage.evolution(100, 200), 100);
      assert.equal(Percentage.evolution(100, 150), 50);
      assert.equal(Percentage.evolution(100, 50), -50);
    });
    it("Should handle 0 evolution", () => {
      assert.equal(Percentage.evolution(0, 100), Infinity);
    });
    it("Should round values", () => {
      assert.equal(Percentage.evolution(30, 100), 233.33);
    });
  });
});
