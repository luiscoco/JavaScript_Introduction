'use strict';

/* CONDITIONALS */

/* calculate the condition in parentheses (is it rue or false) and do some action depending on it run block of code)
condition can be an expression with logical operators, variable etc.
*/

/* IF */
{
	const number = 1;

	if (number > 0) {
		console.log('number is positive');
	} else {
		console.log('number is not positive');
	}
}

{
	// several conditions with else if
	const number = 0;

	if (number > 0) {
		console.log('number is positive');
	} else if (number === 0) {
		console.log('number is null');
	} else {
		console.log('number is negative');
	}
}

{
	const age = 21;
	if (age < 18) {
		console.log('You are not allowed to visit this website');
	}
	// using 'if', both conditions will be evaluated and else clause will be executed for the second if
	// so we need to use 'if else'
	else if (18 <= age && age <= 22) {
		console.log('age is sufficuent');
	} else {
		console.log('Welcome');
	}

	// 🕮 <ltc> f74d9713-e6b7-404e-b939-8a693e1573a4.md
}

/* SWITCH */
/* compares expression for strict equality with cases */
const expression = 'Papayas';

switch (expression) {
	case 'Oranges':
		console.log('Oranges are $0.59 a pound.');
		break;

	case 'Mangoes':
	case 'Papayas':
		console.log('Mangoes and papayas are $2.79 a pound.');
		// expected output: "Mangoes and papayas are $2.79 a pound."
		break;

	default:
		console.log(`Sorry, we don't have this kind of fruits`);
}

// if break is omitted, all cases will be executed until the next break
const value = 'a';

switch (value) {
	case 'a':
		console.log('а');
	case 'b':
		console.log('b');
	case 'c':
		console.log('c');
		break;
	case 'd':
		console.log(d);
}

// prints а b c

/* TERNARY OPERATOR */
/* const result = condition ? value1 : value2; */

{
	const age = 22;
	const name = 'John';
	const accessAllowed = age >= 18 ? (name === 'John' ? true : false) : false;

	console.log(accessAllowed);

	// 🕮 <ltc> 22ea802c-5558-4dd8-92b7-50e4350b502d.md
}
