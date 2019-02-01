> const greeting = 'Hello'
undefined
> greeting
'Hello'
> greeting.split()
[ 'Hello' ]
> const greeting2 = 'Check out this string.'
undefined
> greeting2
'Check out this string.'
> greeting2.split
[Function: split]
> greeting2.split()
[ 'Check out this string.' ]
> greeting2.split(' ')
[ 'Check', 'out', 'this', 'string.' ]
> greeting.split('')
[ 'H', 'e', 'l', 'l', 'o' ]
> greeting
'Hello'
> greeting.split('l')
[ 'He', '', 'o' ]
> const letters = ['a', 'p', 'p', 'l', 'e']
undefined
> letters
[ 'a', 'p', 'p', 'l', 'e' ]
> letters.join()
'a,p,p,l,e'
> letters.join('')
'apple'
> letters.join('p')
'appppplpe'
> Math.random()
0.29820765205687727
> Math.random(10)
0.4205316985334142
> Math.random(0,10)
0.5695701019640449
> Math.random()
0.20355581860595295
> Math.random()
0.8882431073404176
> function getRandomInt(min, max) {
...   min = Math.ceil(min);
...   max = Math.floor(max);
...   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
... }
undefined
> getRandomInt(0, 4)
1
> letters[getRandomInt(0,4)]
'l'
> letters[getRandomInt(0,4)]
'p'
> [letters[randomIndex1], letters[randomIndex2]] = [letters[randomIndex2], letters[randomIndex1]];
[ 'a', 'p' ]
> letters
[ 'p', 'a', 'p', 'l', 'e' ]
> const candy = new Map()
undefined
> candy
Map {}
> candy.set('red','cherry')
Map { 'purple' => 'grape', 'red' => 'cherry' }
> candy.set('green', 'apple')
Map { 'purple' => 'grape', 'red' => 'cherry', 'green' => 'apple' }
> candy.set('blue', 'raspberry')
Map {
  'purple' => 'grape',
  'red' => 'cherry',
  'green' => 'apple',
  'blue' => 'raspberry' }
> candy.set('yellow', 'banana')
Map {
  'purple' => 'grape',
  'red' => 'cherry',
  'green' => 'apple',
  'blue' => 'raspberry',
  'yellow' => 'banana' }
> candy.forEach((color, flavor) => {
... console.log(`The ${flavor} flavor is colored ${color}.`); 
... }); 
The purple flavor is colored grape.
The red flavor is colored cherry.
The green flavor is colored apple.
The blue flavor is colored raspberry.
The yellow flavor is colored banana.
> function printCandy(color, candyMap) {
... if (candyMap.get(color) === undefined) {
..... console.log('Sorry, that color doesnt have a flavor');
..... } else {
..... console.log(candyMap.get(color));
..... }
... }
undefined
> printCandy('orange', candy)
Sorry, that color doesnt have a flavor
undefined
> printCandy('blue', candy)
raspberry
undefined


function colorArray1(color) {
  const flavoredColors = []
  color.forEach((color) => {
  if (candy.get(color) === undefined) {
    flavoredColors.push(null);
  } 
  else { 
    flavoredColors.push(candy.get(color)); 
  } 
})
return flavoredColors
}