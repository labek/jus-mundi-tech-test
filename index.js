const HUNDRED_IN_LETTER = "cent";
const THOUSAND_IN_LETTER = "mille";

const units = Object.freeze({
  0: "zéro",
  1: "un",
  2: "deux",
  3: "trois",
  4: "quatre",
  5: "cinq",
  6: "six",
  7: "sept",
  8: "huit",
  9: "neuf",
  10: "dix",
  11: "onze",
  12: "douze",
  13: "treize",
  14: "quatorze",
  15: "quinze",
  16: "seize",
});

const tens = Object.freeze({
  10: "dix",
  20: "vingt",
  30: "trente",
  40: "quarante",
  50: "cinquante",
  60: "soixante",
  70: "soixante-dix",
  80: "quatre-vingt",
  90: "quatre-vingt-dix",
});

/**
 * Get decimal and unit numbers passed as arguments in letters
 *
 * @param {number} decimalValue
 * @param {number} unitRest
 * @returns {string}
 */
const getDecimalAndUnitNumberInLetters = (decimalValue, unitRest = 0) => {
  const decimalAndUnitNumbersInLetters = [];
  const edgeCaseDecimals = [10, 70, 90];

  // Regular decimal numbers
  if (decimalValue > 0) {
    const isEightyCondition = decimalValue === 80;
    const isEdgeCase =
      edgeCaseDecimals.includes(decimalValue) && [1, 5].includes(unitRest);

    // Default use case
    if (!isEightyCondition && !isEdgeCase) {
      decimalAndUnitNumbersInLetters.push(tens[decimalValue]);
    }

    // Exception for 80 which takes an "s" at the end (eg. "quatre-vingts")
    if (isEightyCondition) {
      decimalAndUnitNumbersInLetters.push(`${tens[decimalValue]}s`);
    }

    // Edge cases: every number containing 11, 71 or 91
    // if (isEdgeCase && decimalValue !== 10 && unitRest !== 1) {
    if (isEdgeCase && decimalValue !== 10) {
      const seventyOneCondition =
        decimalValue === 70 && unitRest === 1 ? "-et" : "";

      decimalAndUnitNumbersInLetters.push(
        `${tens[decimalValue - 10]}${seventyOneCondition}`
      );
    }
  }

  if (unitRest > 0) {
    if (decimalValue >= 20 && decimalValue < 70 && unitRest === 1) {
      decimalAndUnitNumbersInLetters.push("et");
    }

    const isEdgeCase = edgeCaseDecimals.includes(decimalValue);

    const unitNumberInLetter =
      isEdgeCase && unitRest === 1
        ? units[11]
        : isEdgeCase && unitRest === 5
        ? units[15]
        : units[unitRest];

    decimalAndUnitNumbersInLetters.push(unitNumberInLetter);
  }

  return decimalAndUnitNumbersInLetters.join("-");
};

/**
 * Get input number passed as argument in letters
 *
 * @param {number} input
 * @returns {string}
 */
const getNumberInLetter = (input) => {
  const numbersInLetters = [];

  // Unit cases
  if (input <= 16) {
    return units[input];
  }

  const unitRest = input % 10;
  const decimalRest = input % 100;
  const hundredRest = input % 1000;
  const thousandRest = input % 10000;
  const decimalValue = decimalRest - unitRest;
  const hundredValue = Math.round((input - (unitRest + decimalRest)) / 100);
  const thousandValue = Math.round(
    (input - (unitRest + decimalRest + hundredRest)) / 1000
  );

  // Thousands
  if (thousandValue > 0 || thousandRest >= 1000) {
    const isGreaterThanAThousand = thousandValue > 1;

    if (isGreaterThanAThousand) {
      numbersInLetters.push(units[thousandValue]);
    }

    const numberInLetters = isGreaterThanAThousand
      ? `${THOUSAND_IN_LETTER}s`
      : `${THOUSAND_IN_LETTER}`;

    numbersInLetters.push(numberInLetters);
  }

  // Hundreds
  if (hundredRest >= 100) {
    const hundredValueRest = hundredValue % 10;
    const isGreaterThanAHundred = hundredValueRest > 1;

    if (isGreaterThanAHundred) {
      numbersInLetters.push(units[hundredValueRest]);
    }

    const numberInLetters = isGreaterThanAHundred
      ? `${HUNDRED_IN_LETTER}s`
      : `${HUNDRED_IN_LETTER}`;

    numbersInLetters.push(numberInLetters);
  }

  // Decimals & units
  if (decimalValue || unitRest) {
    const decimalAndUnitNumberInLetters = getDecimalAndUnitNumberInLetters(
      decimalValue,
      unitRest
    );

    numbersInLetters.push(decimalAndUnitNumberInLetters);
  }

  return numbersInLetters.join("-");
};

(() => {
  const inputs = [
    0, 1, 5, 10, 11, 15, 20, 21, 30, 35, 50, 51, 68, 70, 75, 99, 100, 101, 105,
    111, 123, 168, 171, 175, 199, 200, 201, 555, 999, 1000, 1001, 1111, 1199,
    1234, 1999, 2000, 2001, 2020, 2021, 2345, 9999, 10000,
    // 11111, 12345, 123456, 654321, 999999,
  ];

  inputs.forEach((input) => {
    const numberInLetters = getNumberInLetter(input);

    console.log({ input, res: numberInLetters });
  });
})();
