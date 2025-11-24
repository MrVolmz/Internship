// upside-down-text.js

const dict = new Map();

const addToDict = (source, target) => {
  const srcArr = Array.from(source);
  const trgArr = Array.from(target);
  if (srcArr.length !== trgArr.length) {
    throw new Error('Source and target strings mismatch');
  }
  for (let i = 0; i < srcArr.length; i++) {
    dict.set(srcArr[i], trgArr[i]);
  }
};

addToDict(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`, `ⱯꓭƆꓷƎℲ⅁HIꓩꓘ⅂ꟽNOԀꝹꓤS⊥ՈɅ𐤵X⅄Z`);
addToDict(`abcdefghijklmnopqrstuvwxyz`, `ɐqɔpǝɟƃɥᴉɾʞꞁɯuodbɹsʇnʌʍxʎz`);
addToDict(`0123456789`, `0ІᘔƐᔭ59Ɫ86`);
addToDict(`!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`, `¡„#$%⅋,)(*+'-˙/:؛>=<¿@]\\[ᵥ‾\`}|{~`);

const upsideDown = (str) =>
  Array.from(str)
    .reverse()
    .map(ch => dict.get(ch) ?? ch)
    .join('');

const input = process.argv[2];
console.log(upsideDown(input));
