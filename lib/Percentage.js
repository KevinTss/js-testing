module.exports = {
  evolution: (baseNumber, finalNumber) => {
    if (baseNumber === 0) {
      return Infinity;
    }
    return ((100 * (finalNumber - baseNumber)) / baseNumber).toFixed(2);
  }
};
