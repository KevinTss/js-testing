const expect = require("chai").expect;
const sinon = require("sinon");

const Social = require("../lib/Social");

describe("Social", () => {
  it("Should have twitter_url", () => {
    expect(Social).to.have.property("twitter_url");
  });

  it("Should have facebook_url", () => {
    expect(Social).to.have.property("facebook_url");
  });

  describe("Get twitter count", () => {
    it("Should be a function", () => {
      expect(Social.getTwitterCount).to.be.a("function");
    });

    it("Should call callAPI", () => {
      sinon.spy(Social, "callApi");
      Social.getTwitterCount("a");
      expect(Social.callApi.calledOnce).to.be.true;
    });
  });
});
