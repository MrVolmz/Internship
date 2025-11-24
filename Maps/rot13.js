// rot13.js
export const rot13Map = new Map();

// Add uppercase letters
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((ch, i) => {
  rot13Map.set(ch, String.fromCharCode(65 + (i + 13) % 26));
});

// Add lowercase letters
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((ch, i) => {
  rot13Map.set(ch, String.fromCharCode(97 + (i + 13) % 26));
});

// Convert string using ROT13
export const rot13 = (str) =>
  Array.from(str)
    .map(ch => rot13Map.get(ch) ?? ch)
    .join('');
