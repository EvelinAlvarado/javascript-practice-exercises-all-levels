"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _005_create_phone_number_1 = require("../005-create-phone-number");
describe("createPhoneNumber", () => {
    test("should return a phone number of type string", () => {
        expect((0, _005_create_phone_number_1.createPhoneNumber)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    });
});
