import { Logger } from '../utils';

Logger.printTitle('Big O Notation');

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

Logger.printValues((t2 - t1) / 1000, 'Slower', 'Time Elapsed');
Logger.printSpacer((t2 - t1) / 1000);

/** ------------  */

function fasterAddUpTo(number: number) {
  return (number * (number + 1)) / 2;
}

const time1 = performance.now();
fasterAddUpTo(1000000000);
const time2 = performance.now();

Logger.printValues((time2 - time1) / 1000, 'Faster', 'Time Elapsed');
