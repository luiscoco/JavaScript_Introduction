'use strict';

// typeof operator is used to determine the type
console.log(typeof 1);

/* STRINGS */
console.log(typeof 'my string');

// 3 types of quotes:
{
	const singleQuotesString = 'I use single quotes';
	// prettier-ignore
	const doubleQuotesString = "I use double quotes";
	const backtickQuotesString = `I use backticks`;
}

{
	/* Escaping the quotes */
	// This will give error:
	// const str = "Hotel "California"";

	// prettier-ignore
	const escapedString = "Hotel \"California\""; // escape quotes that are part of the text, with slash
	// it's better to use backticks to avoid the necessity of escaping
	const backtickString = `Hotel "California"`; // use backticks

	// you still need to escape backward slash with another backward slash
	console.log(`С:\\Program Files\\Folder`);
}

/* Interpolation with backticks */
{
	// insert value into string with ${} syntax
	const hello = 'Hello!';
	console.log(`${hello} I'm fine!`);
}

/* NUMBERS */
console.log(typeof 10);
// numbers are represented with 64-bit value with floating point (double-precision floating point format)

// conventional format
console.log(1000000);
console.log(1_000_000); // syntactic suger, underscores are ignored
console.log(1e6); // exponential notation

// decimals
console.log(1.25);

// special numeric values: Infinity, NaN
// Infinity
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(1 / 0);
console.log(-1 / 0);
// NaN - computational error during math operation
console.log('not a number' / 2);

/* BIGINT */
// for very big numbers to store them without precision loss
console.log(typeof 1234567890123456789012345678901234567890n);

/* BOOLEAN */
console.log(typeof true);
console.log(typeof false);

console.log(4 > 1);

/* UNDEFINED */
let age;
console.log(age);
console.log(typeof age);

age = 35;
console.log(age);
console.log(typeof age);

// better to reserve undefined as a default initial value for unassigned things, if you want set something as 'empty' or 'unknown' explicitly, use null

/* NULL */
// special value - means “nothing”, “empty” or “value unknown”. By using null you make obvious that you set the value to be empty intentionally
const experience = null;

console.log(typeof null); // returns 'object' this is an error from old days of JS

/* SYMBOL type */
// special value that's guaranteed to be unique. Rarely used
const newSymbol = Symbol('name');
console.log(typeof Symbol('name'));

/* OBJECTS */
// used to store collections of primitive data and other objects
const obj = {
	numberProp: 1,
	stringProp: 'value',
	objectProp: {},
};

console.log(typeof obj);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
