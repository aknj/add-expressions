const addExpressions = (exprA, exprB) => {
  // expressions are stored in Map objects, where each term is represented by
  // an exponent => coefficient pair
  //
  // Ax^a + Bx^b + ...
  // Map { a => A, b => B, ... }
  // for example: 4x^3 + 3x^2 + 3
  // Map { 3 => 4, 2 => 3, 0 => 3 }

  let output = new Map();

  for (let [exponent, coefficientA] of exprA) {
    if (exprB.has(exponent)) {
      const sumOfCoefficients = coefficientA + exprB.get(exponent);

      if (sumOfCoefficients !== 0) {
        output.set(exponent, sumOfCoefficients);
      }

      exprB.delete(exponent);
    }
    else {
      output.set(exponent, coefficientA);
    }
  }

  for (let [exponent, coefficient] of exprB) {
    output.set(exponent, coefficient);
  }

  return output;
}

module.exports = addExpressions;
