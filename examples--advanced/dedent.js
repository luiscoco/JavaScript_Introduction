import dedent from 'dedent';

{
	{
		{
			{
				const message = `
          Multiline message that I want to be indented nicely
          But all the indentation inside a multi-line string will be preserved and become a part of the string itself
          This can lead to undesired consequences
        `;

				const message2 = `
That's why people often write multi-line strings
like this
that is actually unreadable
`;
				console.log(message);
			}
		}
	}
}

// Dedent package helps to solve it

function usageExample() {
	const first = dedent`A string that gets so long you need to break it over
                       multiple lines. Luckily dedent is here to keep it
                       readable without lots of spaces ending up in the string
                       itself.`;

	const second = dedent`
    Leading and trailing lines will be trimmed, so you can write something like
    this and have it work as you expect:

      * how convenient it is
      * that I can use an indented list
        - and still have it do the right thing

    That's all.
  `;

	const third = dedent(`
          Wait! I lied. Dedent can also be used as a function.
  `);

	return first + '\n\n' + second + '\n\n' + third;
}

// console.log(usageExample());
