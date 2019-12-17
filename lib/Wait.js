module.exports = {
  executeAfter: (callback, time) => {
    setTimeout(() => callback(2), time);
  }
};
