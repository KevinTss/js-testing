const assert = require("assert");

const Wait = require("../lib/Wait");

describe("Wait", () => {
  it("Should wait 1 sec before execute", done => {
    Wait.executeAfter(milliSeconds => {
      assert.equal(milliSeconds, 2);
      done();
    }, 30);
  });
});
