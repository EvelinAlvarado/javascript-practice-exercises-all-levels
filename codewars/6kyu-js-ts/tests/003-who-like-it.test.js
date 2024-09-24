"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _003_who_like_it_1 = require("../003-who-like-it");
describe("likes function", () => {
    it('should return "no one likes this" when array is empty', () => {
        expect((0, _003_who_like_it_1.likes)([])).toBe("no one likes this");
    });
    it('should return "<name> likes this" when there is only one person', () => {
        expect((0, _003_who_like_it_1.likes)(["Peter"])).toBe("Peter likes this");
    });
    it('should return "<name1> and <name2> like this" when there are two people', () => {
        expect((0, _003_who_like_it_1.likes)(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
    });
    it('should return "<name1>, <name2> and <name3> like this" when there are three people', () => {
        expect((0, _003_who_like_it_1.likes)(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
    });
    it('should return "<name1>, <name2> and X others like this" when there are more than three people', () => {
        expect((0, _003_who_like_it_1.likes)(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
        expect((0, _003_who_like_it_1.likes)(["Alex", "Jacob", "Mark", "Max", "Link"])).toBe("Alex, Jacob and 3 others like this");
    });
});
