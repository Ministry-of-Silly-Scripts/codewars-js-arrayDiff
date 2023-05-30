const arrayDiff = (L1, L2) => {
  return L1.filter(x => !L2.includes(x));
};

module.exports = {
  arrayDiff,
};
