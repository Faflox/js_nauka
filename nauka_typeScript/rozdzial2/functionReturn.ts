// function runMore(distance: number): number {
//     return distance + 10;
// }

function eat(calories: number) {
    console.log('Zjadłem ' + calories + ' kalorii');
}
function sleepIn(hours: number): void {
    console.log('Spałem ' + hours + ' godzin.');
}

let ate: number = 100;
let slept: number = 6;

console.log(eat(ate));
console.log(sleepIn(slept));