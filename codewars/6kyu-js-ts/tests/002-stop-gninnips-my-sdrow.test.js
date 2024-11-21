import { spinWords } from "../002-stop-gninnips-my-sdrow";
describe("spinWords", () => {
    test("should return a spin word if the length word has 5 or more letters", () => {
        const words = spinWords("Hey fellow warriors");
        const returnString = "Hey wollef sroirraw";
        expect(words).toEqual(returnString);
    });
    test("should not return a spin word if the length word has less 5 letters", () => {
        const words = spinWords("This is a test");
        const returnString = "This is a test";
        expect(words).toEqual(returnString);
    });
});
