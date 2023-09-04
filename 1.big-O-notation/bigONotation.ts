console.log('\x1b[38;5;200m Big O Notation \x1b[0m \n');

function slowerAddUpTo(number: number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
slowerAddUpTo(1000000000);
const t2 = performance.now();

console.log(
  `\x1b[38;5;214mSlower\x1b[0m: Time Elapsed: ${(t2 - t1) / 1000} seconds.\n`
);
console.log((t2 - t1) / 1000 && '------\n');

/** ------------  */

function fasterAddUpTo(number: number) {
  return (number * (number + 1)) / 2;
}

const time1 = performance.now();
fasterAddUpTo(1000000000);
const time2 = performance.now();

console.log(
  `\x1b[38;5;214mFaster\x1b[0m: Time Elapsed: ${
    (time2 - time1) / 1000
  } seconds.\n`
);
