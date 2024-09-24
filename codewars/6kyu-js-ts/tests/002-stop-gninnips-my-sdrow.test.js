"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _002_stop_gninnips_my_sdrow_1 = require("../002-stop-gninnips-my-sdrow");
describe("spinWords", () => {
    test("should return a spin word if the length word has 5 or more letters", () => {
        const words = (0, _002_stop_gninnips_my_sdrow_1.spinWords)("Hey fellow warriors");
        const returnString = "Hey wollef sroirraw";
        expect(words).toEqual(returnString);
    });
    test("should not return a spin word if the length word has less 5 letters", () => {
        const words = (0, _002_stop_gninnips_my_sdrow_1.spinWords)("This is a test");
        const returnString = "This is a test";
        expect(words).toEqual(returnString);
    });
});
