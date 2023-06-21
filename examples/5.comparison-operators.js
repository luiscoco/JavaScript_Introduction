'use strict';

2 <= 1;
2 >= 1;
2 < 1;
2 > 1;
2 == 1;
2 === 1;

// strings can also be compared, this is done letter by letter
console.log('Victoria' > 'Victor');

/* loose equality - executes numeric types conversion before comparing the values */
console.log(0 == false);
// after numeric conversion, false is 0
console.log('' == false); // after numeric conversion, '' is 0 and false is 0

// loose equality considers null and undefined equal, but not equal to any other value (special language rule)
console.log(null == undefined);
console.log(null == 0);

/*  strict equality - does not convert types */
console.log(0 === false);
console.log('' === false);

// It is usually the best practice to use === everywhere if you don't need == for some specific reason
