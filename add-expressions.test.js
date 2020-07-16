const addExpressions = require('./add-expressions');

test('polynomials from Example', () => {
  const exp1 = new Map([        [2, 2], [0, 3]]);
  const exp2 = new Map([[3, 3], [2, 1]]);
  const expectedOutput = new Map([[3, 3], [2, 3], [0, 3]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});

test('the same expression twice', () => {
  const exp1 = new Map([[2, 2], [0, 3]]);
  const exp2 = new Map([[2, 2], [0, 3]]);
  const expectedOutput = new Map([[2, 4], [0, 6]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});

test('some real exponents', () => {
  const exp1 = new Map([          [2, 2], [1.1, 3]]);
  const exp2 = new Map([[2.0005, 2],      [1.1, 3]]);
  const expectedOutput = new Map([[2.0005, 2], [2, 2], [1.1, 6]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});

test('some real coefficients', () => {
  const exp1 = new Map([          [2, 2],  [1, 0.3], [0, 3]]);
  const exp2 = new Map([[3, 2.1], [2, 1.5]]);
  const expectedOutput = new Map([[3, 2.1], [2, 3.5], [1, 0.3], [0, 3]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});


test('some terms cancel each other out', () => {
  const exp1 = new Map([[3, 2],  [2, 0.5], [1, 2]]);
  const exp2 = new Map([[3, -2], [2, 1]]);
  const expectedOutput = new Map([[2, 1.5], [1, 2]]);
  expect(addExpressions(exp1, exp2)).toEqual(expectedOutput);
});
