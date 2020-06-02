# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ericasun2000/lotide`

**Require it:**

`const _ = require('@ericasun2000/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: gets the first element of the array 
* `tail(array)`: gets all but the first element of the array 
* `without(array1, array2)`: returns array1 without the elements in array2
* `flatten(array)`: returns the array without nested arrays 
* `middle(array)`: gets the middle element of the array
* `countOnly(array1, array2)`: counts the number of occurences of each element in array2 in array1
* `countLetters(string)`: counts the number of occurences of each character in the string
* `letterPositions(string)`: returns the indices in the string where each character is found 
* `findKeyByValue(object, value)`: finds the key associated to the value
* `map(array, callback)`: returns new array by executing the callback on each element in the array 
* `takeUntil(array, callback)`: returns the slice of the array before the callback returns a truthy value
* `findKey(object, callback)`: returns the key of the first property for which the callback return a truthy value 