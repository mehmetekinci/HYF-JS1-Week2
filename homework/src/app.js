{
  /* Your homework goes here */
  
  /* STRINGS */
  /*1*/ 
  const myString = "hello,this,is,a,difficult,to,read,sentence";
  
  console.log(myString.length);

  console.log(myString.replace(/,/g ,' '));


/* 2*/


  const str = 'dlroW olleH';
  console.log(Array.from(str).reverse().join(''));

  /* ARRAYS */

  const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

  favoriteAnimals.push('turtle');

  // ["blowfish", "capricorn", "giraffe", "turtle"]

  console.log(favoriteAnimals);

  favoriteAnimals.splice(1,0,'horse');

  // ["blowfish", "horse", "capricorn", "giraffe", "turtle"]

  console.log(favoriteAnimals);

  favoriteAnimals.splice(3,1);

  // ["blowfish", "horse", "capricorn", "turtle"]

  console.log(favoriteAnimals);


  /* OPERATORS */

  /* 1 */
  
  0 == '0'  // javascript converts number to string so string + string = true
  0 == []   // 0 is falsy, [] is also falsy so falsy + falsy = true
  "0" == [] // string is truthy. [] is falsy so truthy + falsy = false
  
  /* 2 */

  const x = [1, 2, 3];
  const y = [1, 2, 3];
  const z = y;

  console.log(x == y);  // false - reference is not same
  console.log(x === y); // false - reference is not same
  console.log(z === y); // true - objects returns true when they reference the same memory location.
  console.log(z == x);  // false - reference is not same

  /* 3 */

  const o1 = { foo: "bar" };
  const o2 = { foo: "bar" };
  const o3 = o2;

  console.log(o1 == o2);  // false
  console.log(o2 == o3);  // true
  console.log(o3 == o1);  // false
  console.log(o2 == o1);  // false

  // when we change o1 whit o3
  /*
  
  const o3 = { foo: "bar" };
  const o2 = { foo: "bar" };
  const o1 = o2;
  
  */

  console.log(o1 == o2);  // true
  console.log(o2 == o3);  // false
  console.log(o3 == o1);  // false
  console.log(o2 == o1);  // false

  // when we change o2 whit o3, giving syntax error

  // Does the order that you assign (o3 = o2 or o2 = o3) matter?

  // sure. when you use o2 = o3, o2 declares twice. giving syntax error.  


  /* QUESTIONS FROM HYF REPOS */

  /* 8.1 */

let foo = 1;
let bar = "1";
let ham = "Hallo";
let baz = true;
let quz = undefined;

/* 8.2 */

console.log("The value of my variable foo is: " + foo);
console.log("The value of my variable bar is: " + bar);
console.log("The value of my variable ham is: " + ham);
console.log("The value of my variable baz is: " + baz);
console.log("The value of my variable quz is: " + quz);

/* 8.3 */

console.log("the type of foo will be: number");
console.log("the type of bar will be: string");
console.log("the type of ham will be: string");
console.log("the type of baz will be: boolean");
console.log("the type of quz will be: undefined");

/* 8.4 */

typeof foo;
typeof bar;
typeof ham;
typeof baz;
typeof quz;

/* 8.5  &  8.6*/

if (typeof foo === typeof bar) {
  console.log("SAME TYPE!");
} else {
  console.log("NOT SAME TYPE!");
}

if (typeof bar === typeof ham) {
  console.log("SAME TYPE!");
} else {
  console.log("NOT SAME TYPE!");
}

if (typeof quz === typeof ham) {
  console.log("SAME TYPE!");
} else {
  console.log("NOT SAME TYPE!");
}


/* 9 */

let quuz = 7;

quuz = quuz % 3; // result will be 1

/* 9.1*/

let a = 10;
a = a % 4;
console.log("Remaining is after 10 divide 4: " + a )

let b = 15;
b = b % 8;
console.log("Remaining is after 15 divide 8: " + b )

let c = 23;
c = c % 4;
console.log("Remaining is after 23 divide 4: " + c )


/* 10.1 */
// you can store multiple types value in an array. 
let arr = [1, 2];
arr.push("cars");
arr.push(true);
arr.push(undefined);
console.log(arr);

/* 10.2 & 10.3*/
//you can compare infinities.
// both of them are Infinity. Infinity === Infinity ==> true
let q = 6/0;
let r = 10/0;

if (q === r ) {
    console.log(true);
} else {
    console.log(false);
}
 


}
