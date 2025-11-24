import * as assert from 'node:assert/strict';

const purchases = [
  { product: 'toothbrush', quantity: 1 },
  { product: 'egg', quantity: 4 },
  { product: 'pen', quantity: 2 },
];

const multiPurchases = purchases.filter(p => p.quantity > 1);

console.log(multiPurchases);

assert.deepEqual(
  multiPurchases,
  [
    { product: 'egg', quantity: 4 },
    { product: 'pen', quantity: 2 },
  ]
);
