function numberOfDigits(n) {
  if (n === undefined) return 0;
  if (n < 0) return numberOfDigits(Math.abs(n));
  if (n < 10) return 1;

  return 1 + numberOfDigits(n / 10);
}

console.log(numberOfDigits(2312341234));