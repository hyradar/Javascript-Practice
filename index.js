// Searching in array

// Now let’s cover methods that search in an array.
// indexOf/lastIndexOf and includes

// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

//     arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
//     arr.includes(item, from) – looks for item starting from index from, returns true if found.

// Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

// For instance:

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true

// Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

// If we want to check if item exists in the array, and don’t need the index, then arr.includes is preferred.

// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

// let fruits = ['Apple', 'Orange', 'Apple']

// alert( fruits.indexOf('Apple') ); // 0 (first Apple)
// alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// The includes method handles NaN correctly

// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

// const arr = [NaN];
// alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
// alert( arr.includes(NaN) );// true (correct)

// That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.
// find and findIndex/findLastIndex

// Imagine we have an array of objects. How do we find an object with the specific condition?

// Here the arr.find(fn) method comes in handy.

// The syntax is:

// let result = arr.find(function(item, index, array) {
//   // if true is returned, item is returned and iteration is stopped
//   // for falsy scenario returns undefined
// });

// The function is called for elements of the array, one after another:

//     item is the element.
//     index is its index.
//     array is the array itself.

// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

// For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // John

// In real life arrays of objects is a common thing, so the find method is very useful.

// Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

// The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

// The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

// Here’s an example:

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"},
//   {id: 4, name: "John"}
// ];

// // Find the index of the first John
// alert(users.findIndex(user => user.name == 'John')); // 0

// // Find the index of the last John
// alert(users.findLastIndex(user => user.name == 'John')); // 3

// filter

// Transform an array

// Let’s move on to methods that transform and reorder an array.
// map

// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.

// The syntax is:

// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// });

// For instance, here we transform each element into its length:

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6