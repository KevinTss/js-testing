module.exports = {
  add: (...args) => {
    return args.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
};
