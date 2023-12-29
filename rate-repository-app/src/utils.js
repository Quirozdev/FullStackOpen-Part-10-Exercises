export function suffixThousandNumbers(number) {
  if (number < 1000) {
    return String(number);
  }

  const integerPart = Math.floor(number / 1000);
  const decimalPart = Math.round((number % 1000) / 100);

  return `${integerPart}${decimalPart === 0 ? 'k' : '.' + decimalPart + 'k'}`;
}
