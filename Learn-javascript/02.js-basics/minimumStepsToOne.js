
// Linear
let cache = {};

function minimumStepsToOne(num) {

    if (num in cache) return cache[num];
    if (num == 1) return 0;

    let result = minimumStepsToOne(num - 1);

    if (num % 3 === 0) {
        result = Math.min(result, minimumStepsToOne(num / 3));
    }
    if (num % 2 === 0) {
        result = Math.min(result, minimumStepsToOne(num / 2));
    }

    cache[num] = result + 1
    return result + 1
}
// console.log("Please enter a number");

minimumStepsToOne(3000)