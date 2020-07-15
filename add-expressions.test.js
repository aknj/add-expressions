const addExpressions = require('./add-expressions');

test('polynomials from Example', () => {
  const exp1 = new Map([[2, 2], [0, 3]]);
  const exp2 = new Map([[3, 3], [2, 1]]);
  const expectedOutput = new Map([[3, 3], [2, 3], [0, 3]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});

test('the same expressions', () => {
  const exp1 = new Map([[2, 2], [0, 3]]);
  const exp2 = new Map([[2, 2], [0, 3]]);
  const expectedOutput = new Map([[2, 4], [0, 6]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});
