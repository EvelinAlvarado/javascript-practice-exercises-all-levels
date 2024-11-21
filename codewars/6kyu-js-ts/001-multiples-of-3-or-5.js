// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.
export class Challenge {
    static solution(number) {
        if (number > 0 && Number.isInteger(number)) {
            const array = [];
            for (let index = 0; index < number; index++) {
                array.push(index);
            }
            const values = new Set();
            array.forEach((element) => {
                if (element % 3 === 0 || element % 5 === 0) {
                    values.add(element);
                }
            });
            const sum = Array.from(values).reduce((total, currentNumber) => {
                return total + currentNumber;
            }, 0);
            return sum;
        }
        else {
            return 0;
        }
    }
}
console.log(Challenge.solution(10));
//Solution 2
export class Challenge2 {
    static solution(num) {
        let total = 0;
        for (let i = 0; i < num; i++) {
            total += i % 5 == 0 || i % 3 == 0 ? i : 0;
        }
        return total;
    }
}
