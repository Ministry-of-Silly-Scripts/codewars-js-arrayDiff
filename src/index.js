const arrayDiff = (L1, L2) => {
  out = []
  if (L2.length === 0) {
    return L1;
  }

  for (elem of L1) {
    if (elem !== L2[0]) {
      out.push(elem);
    }
  }

  return out;
};

module.exports = {
  arrayDiff,
};
