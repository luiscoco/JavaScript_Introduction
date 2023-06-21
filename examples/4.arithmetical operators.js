'use strict';

/* BINARY OPERATORS */

console.log(3 - 2);
console.log(3 * 2);
console.log(8 / 2);
// non-number operands are converted to number
console.log('4' / '2');

// binary +
// adds numbers
console.log(1 + 2);
// if binary + is applied to strings, it merges (concatenates) them:
console.log('John' + ' ' + 'Dow');

// if any of the operands is a string, then the other one is converted to a string too.
console.log(4 + '2'); // binary + converts

/* Remainder */
console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(8 % 3); // 2, the remainder of 8 divided by 3

/* Exponentiation */
console.log(2 ** 3); // 2³ = 8

// adv🕮 <ltc> 5184915b-af05-4ecd-b084-f17a04076421.md

/* UNARY OPERATORS (have a single operand) */

/* Unary minus */
let x = 1;
x = -x;
console.log(x);

/* Unary plus */
// converts non-numbers to numbers (same as Number())
console.log(+1);
console.log(+'1');
console.log(typeof +'1');

/* Increment / decrement */
// increase or decrease number by one
// can be used only on variable, you can not write something like 5++.
{
	let counter = 0;
	++counter; // same as    counter = counter + 1;
	console.log(counter);
}
{
	// prefix form
	let counter = 0;
	console.log(++counter); // increases value and then returns it
}
{
	// postfix form
	let counter = 0;
	console.log(counter++); // returns the initial value, then increases it
	console.log(counter); // now it's already increased (by counter++ on the previous line)
}

/* Shorthand operators (modify-and-assign) */
let n = 2;
console.log((n += 5)); // same as n = n + 5
// console.log((n = n + 5));
// +=, -=, /=, *=
