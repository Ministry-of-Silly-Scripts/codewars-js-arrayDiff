const arrayDiff = (L1, L2) => {
  out = []
  if (L2.length === 0) {
    return L1;
  }

  out = [...L1]

  for (elem2 of L2) {
    if (L1.includes(elem2)) {
      out = out.filter(x => x !== elem2)
    }
  }

  return out;
};

module.exports = {
  arrayDiff,
};
