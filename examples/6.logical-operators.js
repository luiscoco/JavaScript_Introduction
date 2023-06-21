'use strict';

/* LOGICAL OPERATORS */

/*
- can take any values as operands, but convert values to boolean to decide, which one will be returned
- return the initial operand value, not the converted one;
- used in 'if' and 'switch' constructions to check if condition is met;
- have lower priority then arithmetic and comparison operators.
priority, high to low:
!
*, / , +, -,
< >
===
&&
||
=
*/

// 🕮 <ltc> ef1ca4f2-d4bb-438b-81cc-6f2b9cff4c87.md

/* || (OR) */
/* requires one of the operands to be truthy.
returns first 'truthy' value and stops calculating the rest (then condition is met) */
console.log(0 || 1 || 2);

// can be used to set the default
{
	let age;
	age = 25;
	age = age || 25;
	console.log(age);
}

{
	// 0 value will also be replaced by default (since 0 is falsy), and sometimes this is not a desired behavior
	let age = 0;
	age = age || 25;
	console.log(age);
}

/* ?? (NULLISH COALESCENCE OPERATOR) */
/*
	returns first defined (non-nullish, i.e not null and not undefined) value
*/
{
	let age = 0;
	age = age ?? 25;
	console.log(age);
	// default is assigned, if value is not nullish (null or undefined)
}

/* && (AND) */
/* require both operands to be truthy.
returns first falsy value and stops calculating the rest (then it's obvious that both operands cannot be truthy) */

console.log(0 && 1 && 2);

/* ! (NOT) */
/* converts the value to boolean and then inverts it */
console.log(!true);
console.log(!0);

// double NOT (!!) is sometimes used instead as equivalent of Boolean() to convert number to Boolean
console.log(!!22);
// same as
console.log(Boolean(22));
