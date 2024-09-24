"use strict";
//TODO Who likes it?
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = exports.likes2 = void 0;
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
//Solution 1
const likes2 = (a) => {
    if (a.length === 0) {
        return "no one likes this";
    }
    else if (a.length === 1) {
        return a.toString() + " likes this";
    }
    else if (a.length === 2) {
        return a.join(" and ") + " like this";
    }
    else if (a.length === 3) {
        const twoNames = a.slice(0, 2).join(", ");
        return twoNames + " and " + a[2] + " like this";
    }
    else {
        const twoNames = a.slice(0, 2).join(", ");
        return twoNames + " and " + (a.length - 2) + " others like this";
    }
};
exports.likes2 = likes2;
//Solution 2
const likes = (a) => {
    switch (a.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${a[0]} likes this`;
        case 2:
            return `${a[0]} and ${a[1]} like this`;
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default:
            return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
};
exports.likes = likes;
console.log((0, exports.likes)([]));
console.log((0, exports.likes)(["Peter"]));
console.log((0, exports.likes)(["Jacob", "Alex"]));
console.log((0, exports.likes)(["Max", "John", "Mark"]));
console.log((0, exports.likes)(["Alex", "Jacob", "Mark", "Max"]));
console.log((0, exports.likes)(["Alex", "Jacob", "Mark", "Max", "Link", "Mario", "Henrick"]));
