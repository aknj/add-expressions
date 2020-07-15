const addExpressions = (exp1, exp2) => {
  let output = new Map();
  for (let [exponent, coefficient] of exp1) {
    if (exp2.has(exponent)) {
      output.set(exponent, coefficient + exp2.get(exponent));
      exp2.delete(exponent);
    }
    else {
      output.set(exponent, coefficient);
    }
  }

  for (let [exponent, coefficient] of exp2) {
    output.set(exponent, coefficient);
  }

  return output;
}

module.exports = addExpressions;
