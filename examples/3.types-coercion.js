'use strict';
/* Primitive types conversions */

/* NUMERIC CONVERSION */

// Explicit numeric conversion using Number():
console.log(typeof '25');
console.log(typeof Number('25'));

console.log(Number(0));
console.log(Number(null));
console.log(Number(undefined)); // !

console.log(Number(true));
console.log(Number(false));
// whitespaces are discarded
console.log(Number(' 25 '));
// empty string yields 0
console.log(Number(''));
// error during numeric conversion yields NaN
console.log(Number('a233'));

// Implicit numeric - during mathematical operations * / - +
console.log(4 / '2');
console.log(4 + true);
// if one of the operands is a string, the second in converted to string also
console.log(4 + 'true'); // !

/* STRING CONVERSION */

// Explicit string conversion using String():
console.log(typeof 22);
console.log(typeof String(22));

// implicit automatic convertion  - if string (text) representation is needed (like for console.log, alert)
console.log(22); // output, that is printed by Quokka, is of string type
// when adding to string
console.log(22 + '22');

/* BOOLEAN CONVERSION */

// explicit boolean
console.log(Boolean(1));

// everything's true, except:
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

// only fully empty strings are false, strings that contain 0 or whitespaces are true:
// !
console.log(Boolean(' '));
console.log(Boolean('0'));
