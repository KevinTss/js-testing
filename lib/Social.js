module.exports = {
  twitter_url: "http://urls.api.twitter.com/1/urls/count.json?callback=?&url=",
  facebook_url: "http://graph.facebook.com/",
  getTwitterCount(url) {
    return this.callApi(this.twitter_url + url);
  },
  callApi(url) {
    return url;
  }
};
