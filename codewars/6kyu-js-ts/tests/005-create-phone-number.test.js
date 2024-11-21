import { createPhoneNumber } from "../005-create-phone-number";
describe("createPhoneNumber", () => {
    test("should return a phone number of type string", () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    });
});
