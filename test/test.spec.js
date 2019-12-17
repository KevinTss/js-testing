const assert = require("assert");

describe("Examples tests", () => {
  it("Should double a number", () => {
    const double = nb => nb * 2;
    const nb = 2;
    assert.equal(double(nb), 4);
  });
});
