import * as assert from 'node:assert/strict';

const purchases = [
  { product: 'toothbrush', quantity: 1 },
  { product: 'egg', quantity: 4 },
  { product: 'pen', quantity: 2 },
];

const products = purchases.map(p => p.product);

console.log(products);

assert.deepEqual(
  products,
  ['toothbrush', 'egg', 'pen']
);
