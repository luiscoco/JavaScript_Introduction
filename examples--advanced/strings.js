/* STRINGS */
console.log(typeof 'my string');

// # 3 types of quotes:
{
	const singleQuotesString = 'I use single quotes';
	// prettier-ignore
	const doubleQuotesString = "I use double quotes";

	const backtickQuotesString = `I use backticks`;
}

// # Escaping the quotes
{
	// This will give an error:
	// const str = "Hotel "California"";

	// prettier-ignore
	const escapedString = "Hotel \"California\""; // escape quotes that are part of the text, with slash
	// const html ="<div class=\"myClass\"> Some text </div>"
	const escapedString2 = 'Hotel "California"';
	// it's better to use backticks to avoid the necessity of escaping
	const backtickString = `Hotel "California"`; // use backticks

	// you still need to escape backward slash with another backward slash
	console.log(`С:\\Program Files\\Folder`);

	// es6-string-html VS Code plugin
	console.log(/* html */ `<div class="myClass"> HTML in string</div>`);
}

// # multiline strings
console.log(`
Look Ma!
I am on a new line!`);

// # Special symbols
{
	// tabulation
	console.log(`\tI am tabulated!`);

	// newline
	console.log('Look Ma!\nI am on a new line!');

	console.log('I really mean a backslash here \\');
}

// # Symbols access
{
	// length property
	console.log('string'.length);

	const st = 'string';
	// symbols numerations starts from 0 (like in arrays)
	console.log(st[0]);
	console.log('string'[8]);

	// `at` method - if negative value passed, counts from the end
	console.log(st.at(-1));
	// charAt🕮 <ltc> edd52abd-dc96-4cb4-89bb-65e5ffa9c8b9.md

	// @if level !== 'basic'
	// IMMUTABILITY: you cannot change one symbol of string, only recreate the whole string
	// st[4] = 'o'; // won't work  TypeError: Cannot assign to read only property
	console.log(st);
	console.log(st.replace('i', 'o'));
	// @endif
	{
		// string can be iterated with `for ... of`  loop
		for (const char of 'any string') console.log(char);

		// @if level !== 'basic'
		// and with `for` loop
		for (let i = 0; i < st.length; i++) {
			console.log(st[i]);
		}
		// @endif
	}
}

// # METHODS

// ~ casing
{
	console.log('Interface'.toUpperCase());
	console.log('Interface'.toLowerCase());
}

// ~ trimming etc
{
	console.log('  string  '.trim());

	// @if level !== 'basic'
	// generate a string
	console.log('?'.repeat(10));

	console.log('string'.padEnd(9, '!'));
	console.log('string'.padStart(9, '...'));
	// @endif
}

// ~ search
{
	const str = 'Widget with id';

	// = indexOf - return match position or -1, if nothing is found
	console.log(str.indexOf('Widget')); // 0, 'Widget' substring found at the beginning
	console.log(str.indexOf('widget')); // -1, no matches. Search is case-sensitive

	console.log(str.indexOf('id'));
	console.log(str.indexOf('id', 2)); // start searching from 3rd symbol
	// starts searching from the end and returns first match position
	// position is still counted from the beginning!
	console.log(str.lastIndexOf('id'));
	console.log(str.lastIndexOf('id', 10));

	// = Presence of substring
	console.log('string'.includes('str'));
	console.log('string'.includes('ring', 2));

	// @if level !== 'basic'
	console.log('string'.indexOf('ring') !== -1);
	console.log(~'string'.indexOf('ring'));
	console.log('string'.includes('ring'));
	// @endif

	// ~🕮 <ltc> 6f7ce06b-99dd-41fd-bc7f-22049eb60c82.md

	console.log('string'.startsWith('str'));
	console.log('string'.endsWith('g'));
}

// ~ split
{
	console.log('site.com.ua'.split('.'));
	console.log('string'.split(''));
}

// ~ taking a substring
{
	// = slice
	// Arguments mean a symbols count, after which we do the slicing
	console.log('stringify'.slice(2, 4));
	console.log('stringify'.slice(5));
	// symbols can be counted from the end
	console.log('stringify'.slice(-4, -1));

	// @if level !== 'basic'
	// = substring
	console.log('stringify'.substring(2, 4));
	console.log('stringify'.substring(4, 2));
	// negative values are considered 0
	console.log('stringify'.substring(-2, 2));
	console.log('stringify'.substring(2));

	// = substr
	// 🕮 <ltc> 05b66fc2-1c20-4749-9c7b-7206f294c9f4.md
	// @endif
}

// @if level !== 'basic'
// # unicode, emoji
{
	// \xXX notation -fo symbols between 00 and FF (only for only for the first 256 Unicode characters)
	console.log('\xA9');

	// \uXXXX notation -fo symbols between 0000 and FFFF (only for only for the first 256 Unicode characters)
	console.log('Unicode symbols \u2604 \u30C4 \u2665');

	// \u{X…XXXXXX} notation - for any symbol represented in Unicode (between 0 and 10FFFF)
	console.log('\u{1F60D}'); // long Unicode symbol

	// JS uses UTF-16 encoding internally
	// There are special methods that allow to get the character for the code and back:

	console.log('W'.codePointAt(0));
	console.log('w'.codePointAt(0));
	console.log(String.fromCodePoint(87));

	// = surrogate pairs and emoji
	// rare symbols that require more than 2 bytes are encoded with a pair of 2-byte characters called “a surrogate pair”.
	const emoji = String.fromCodePoint(0x1f354);

	console.log(emoji);
	console.log(`I❤️${emoji}`);

	console.log(emoji.length);

	// 🕮 <ltc> e67f6784-69fb-4185-8bb2-d76cda70ce0a.md
	console.log(emoji.codePointAt().toString(16));
	console.log(emoji.codePointAt(0).toString(16));
	// codePointAt gives a correct code when reading the first element (or default)

	// and it can be passed to fromCodePoint method to get a symbol
	console.log(String.fromCodePoint(emoji.codePointAt()));

	const heart = '❤️'.codePointAt(0);
	console.log(heart);
	console.log(String.fromCodePoint(heart));

	// codePointAt(1) gives the code for the second element (unusable on it's on)
	console.log(emoji.codePointAt(1).toString(16));
	// because pieces of a surrogate pair have no meaning without each other
	console.log(String.fromCodePoint(emoji.codePointAt(1)));

	// console.log(emoji.charCodeAt(1).toString(16));

	// 🕮 <ltc> 1c0bf153-1615-4ff9-b9c9-5d81610286ac.md

	// = diacritical signs
	console.log('S\u0307');
	console.log('S\u0307\u0323');
}
// @endif

// @if level !== 'basic'
// # tagged templates
{
	const person = 'Mike';
	const age = 100;

	const output = myTag`That ${person} is a ${age}`;

	function myTag(strings, personExpression, ageExpression) {
		// first argument - slices of original string between interpolated parts
		console.log(strings);
		// rest of the arguments - interpolated parts (expression) in order

		const ageStr = ageExpression > 99 ? 'centenarian' : 'youngster';

		// We can perform some calculations and then rebuild the string from these parts
		return `${strings[0]}${personExpression}${strings[1]}${ageStr}${strings[2]}`;
	}

	console.log(output);
}

// @endif
