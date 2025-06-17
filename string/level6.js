const char = 'aabsshdfowakaaaalswwwl';

let max = 0, count = 1;

for (let i = 1; i < char.length; i++) {
  count = (char[i] === char[i - 1]) ? count + 1 : 1;
  if (count > max) max = count;
}

console.log(max);
