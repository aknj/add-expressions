const addExpressions = require('./add-expressions');

test('polynomials from Example', () => {
  const expr1 = new Map([        [2, 2], [0, 3]]);
  const expr2 = new Map([[3, 3], [2, 1]]);
  const expectedOutput = new Map([[3, 3], [2, 3], [0, 3]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
});

test('the same expression twice', () => {
  const expr1 = new Map([[2, 2], [0, 3]]);
  const expr2 = new Map([[2, 2], [0, 3]]);
  const expectedOutput = new Map([[2, 4], [0, 6]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
});

test('some real exponents', () => {
  const expr1 = new Map([          [2, 2], [1.1, 3]]);
  const expr2 = new Map([[2.0005, 2],      [1.1, 3]]);
  const expectedOutput = new Map([[2.0005, 2], [2, 2], [1.1, 6]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
});

test('some real coefficients', () => {
  const expr1 = new Map([          [2, 2],  [1, 0.3], [0, 3]]);
  const expr2 = new Map([[3, 2.1], [2, 1.5]]);
  const expectedOutput = new Map([[3, 2.1], [2, 3.5], [1, 0.3], [0, 3]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
});

test('some terms cancel each other out', () => {
  const expr1 = new Map([[3, 2],  [2, 0.5], [1, 2]]);
  const expr2 = new Map([[3, -2], [2, 1]]);
  const expectedOutput = new Map([[2, 1.5], [1, 2]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
});

test('all terms cancel each other out', () => {
  const expr1 = new Map([[3, 5], [2, 10], [1, 1], [0, 7]]);
  const expr2 = new Map([[3, -5], [2, -10], [1, -1], [0, -7]]);
  expect(addExpressions(expr1, expr2)).toEqual(new Map());
})

test('floating-point arithmetic', () => {
  const expr1 = new Map([[3, 1.0000001],  [2.3, 1.0000001]]);
  const expr2 = new Map([[3, 1],          [2.3, -1]]);
  const expectedOutput = new Map([[3, 2.0000001], [2.3, 0.0000001]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
})

test('floating-point arithmetic 2', () => {
  const expr1 = new Map([[3, 1.0001], [1, 1.0001], [-1, 1.01]]);
  const expr2 = new Map([[3, 1.0], [1, -1], [-1, -1]]);
  const expectedOutput = new Map([[3, 2.0001], [1, 0.0001], [-1, 0.01]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
})

test('floating-point arithmetic 3: testing the limits of precision', () => {
  const expr1 = new Map([
    [2, 1.0],
    [1, 1.000000000000001],
    [0, 1]
  ]);
  const expr2 = new Map([
    [2, 2.0],
    [1, -1],
    [0, -0.999999999999]
  ]);
  const expectedOutput = new Map([
    [2, 3],
    [1, 0.000000000000001],
    [0, 0.000000000001]
  ]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
})

test('floating-point arithmetic 4: number exceeding precision', () => {
  const expr1 = new Map([[2, 1.0], [1, 1.0000000000000001]]);
  const expr2 = new Map([[2, 2.0], [1, -1]]);
  const expectedOutput = new Map([[2, 3]]);
  expect(addExpressions(expr1, expr2)).toEqual(expectedOutput);
})
