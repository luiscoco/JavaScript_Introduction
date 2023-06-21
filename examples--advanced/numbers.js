// # NUMBERS
console.log(typeof 10);

// numbers are represented with 64-bit value with floating point (double-precision floating point format)
// https://fabiensanglard.net/floating_point_visually_explained/index.php
// 1 bit sign, 11 bits exponent (window), 52 bits mantissa (fraction, offset),
// 1 bit sign means we have 2 zeroes
console.log(+0);
console.log(-0);
console.log(-0 === 0);

console.log(2 ** 52);

// # MIN AND MAX VALUES, BIGINT
{
	console.log(Number.MAX_VALUE);
	console.log(Number.MIN_VALUE); // The minimum (closest to zero) representable number
	console.log(Number.MAX_VALUE * 2);

	console.log(Number.MAX_SAFE_INTEGER); // equals to 2 ** 53 - 1
	console.log(Number.MIN_SAFE_INTEGER);
	console.log(2 ** 53 - 1);

	// above this number the precision error can be more then the distance between the consequtive integer numbers

	// operations on larger / smaller numbers are not 'safe'
	// in this example we're getting the same number because of precision loss
	console.log(Number.MAX_SAFE_INTEGER + 1); // odd numbers rounded to even values
	console.log(Number.MAX_SAFE_INTEGER + 2);

	// ~ BigInt
	// will solve the problem above:
	console.log(BigInt(Number.MAX_SAFE_INTEGER) + 0n);
	console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1n);
	console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
	console.log(typeof 0n);
	// bigints cannot be mixed with numbers or used in Math methods
	// console.log(Math.max(2n, 2)); // TypeError: Cannot convert a BigInt value to a number
}

// # FORMATS
{
	// ~ conventional
	console.log(1000000);

	console.log(1_000_000); // syntactic sugar, underscores are ignored

	// ~ exponential (scientific)
	// number after 'e' means number of zeroes to add (in other words, multiplication on 10 in power of number after e)
	console.log(1e6);
	console.log(1 * 10 ** 6);
	console.log(1e-4);

	// ~ hexadecimal
	// start with 0x  symbols 0-9 and a-f can be used
	// register doesn't matter
	console.log(0xff);
	// prettier-ignore
	console.log(0Xff);
	console.log(0xff);

	// ~ octadecimal
	// start with 00  symbols 0-7 can be used
	console.log(0o37);

	// ~ binary
	// start with 0b  symbols 0 and 1 can be used
	console.log(0b11111111);
}

// # PARTIAL PARCING
{
	// useful for strings with measurement units like in CSS

	// Number is not able to parse the string with letters
	console.log(Number('12px'));

	// parseFloat / parseInt methods can read the numbers, until they meet a non-number symbol
	// they return the part that they were able to read
	console.log(parseInt('12.22px'));

	// parseFloat moves forward if it meets a dot (it knows it is a fractions part divider)
	console.log(parseFloat('12.22px'));
	console.log(parseFloat('12.22.33px'));

	// can't parse fraction in string with comma as separator (not locale-aware)
	console.log(parseFloat('12,22'));
	// workaround:
	console.log(parseFloat('12,22'.replace(',', '.')));
}

// # conversions
{
	console.log((255).toString(16));
	console.log((255).toString(8));
	console.log((255).toString(36));

	// can't just convert back with Number()
	// console.log(Number((255).toString(16)));
	// need to use parseInt with radix argument (tell what format number is contained in string)
	console.log(parseInt('ff')); // tries to read as decimal format
	// give it a hint
	console.log(parseInt('ff', 16));

	// parseInt without the radix passed can behave inconsistently, so it's recommended to always pass the radix:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#description
	console.log(parseInt('0xff'));
	console.log(parseInt('0b11111111')); //!
	console.log(parseInt('0o377', 8)); //!

	// toString convertion generates strings without prefixes:
	const octa = (255).toString(8);
	console.log(octa);
	console.log(parseInt(octa, 8));

	// reading un-prefixed number strings with radix specified works correctly:
	console.log(parseInt('10px', 10));
	console.log(parseInt('ff', 16));
	console.log(parseInt('377', 8));
	console.log(parseInt('11111111', 2));
}

// # SPECIAL NUMERIC VALUES
{
	// ~ Infinity
	console.log(1 / 0);
	console.log(1e500); // number above the available range
	console.log(-1 / 0);
	console.log(typeof Infinity);

	// ~ NaN - computational error during math operation
	console.log('not a number' / 2);
	console.log(typeof NaN);

	// ~ CHECKING FOR NAN / INFINITY
	// = isNaN / Number.isNaN
	{
		// all NaN'a are different if == or === are used for comparison
		console.log(NaN == NaN);
		console.log(NaN === NaN);
		console.log(Object.is(NaN, NaN));

		console.log(isNaN(100));

		// isNaN converts the value to number first
		console.log(Number.isNaN(true));
		// that's why it can return true for strings (NaN appears as a result of conversion)
		console.log(isNaN('some string'));

		// Number.isNaN does not make a conversion
		console.log(Number.isNaN('some string'));
	}

	// = isFinite / Number.isFinite
	{
		console.log(isFinite(15));
		console.log(isFinite(NaN));
		console.log(isFinite(Infinity));

		// isFinite converts to number first
		// can be used to validate whether a string value is a regular number (not Infinite and not NaN)
		console.log(isFinite('123')); // true, because isFinite converts string "123" into a number 123 and it is finite
		console.log(isFinite('str')); // str is converted to NaN which is not finite

		// Number.isFinite does not make a conversion.
		console.log(Number.isFinite('123')); // string is not a number and therefore cannot be a finite number
		console.log(Number.isFinite(123));
	}

	// = Object.is
	// uses sameValueZero comprison algorhythm
	console.log(-0 == 0);
	console.log(-0 === 0);
	console.log(Object.is(-0, 0));

	console.log(NaN === NaN);
	console.log(Object.is(NaN, NaN));
}

// # FRACTIONS
// = decimals
console.log(1.25);

console.log((1.25).toLocaleString());
console.log((1.25).toLocaleString('en'));

console.log(Number.isInteger(2.22));
console.log(Number.isInteger(2));
console.log(Number.isInteger(2.0));

// # ROUNDING
// = Rounding to integer
console.log(Math.round(2.5));
console.log(Math.floor(2.5));
console.log(Math.ceil(2.1));
/*
"bigger" is considered as "positive" side in no regard to number's sign
"smaller" - "negative" side
*/
console.log(Math.ceil(-2.1));
console.log(Math.floor(-2.1));

// discard decimal part (after the point)
console.log(Math.trunc(-2.1));
console.log(Math.trunc(23.88555));

// = rounding to the fixed number of digits after the point
// toFixed
// returns a string (unlike Math.round) - handy to ouput a fixed number of zeroes after the point
console.log(Number(2.5).toFixed(0));
// if needed, fills with zeroes
console.log((2.5).toFixed(5));

// toPrecision - rounds to the specified number of significant digits (ie. starting from first digit from the left, that is non-zero). Returns a string
console.log((25.526).toPrecision(4));
console.log((0.000123).toPrecision(4));

// # PRECISION PROBLEMS AND ROUNDING
console.log(0.1 + 0.2 === 0.3);

console.log((0.1).toFixed(20));
console.log((0.3).toFixed(20));

// workaround: use rounding to fight this
console.log(Number(0.1 + 0.2).toFixed(1) === Number(0.3).toFixed(1));

// rounding of some numbers, that in binary form are represented as endless fractions, may lead to errors because of precision loss
// 6.35 is an endless fraction in binary:
console.log((6.35).toString(2));
console.log((6.35).toFixed(1)); // should have been 6.4!

// workaround: temporarily convert to bigger number in order to  make rounding with increased precision (63.5 in binary is not an endless fraction)
console.log((6.35 * 10).toFixed(0) / 10);
