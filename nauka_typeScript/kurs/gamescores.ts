const gameScores = [12,54,23,12,57]
const favouriteThings = ["Pizza", "Video Games", "Movies", "Coding", "Traveling"];
const voters = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

function getLastItemGame<Type>(array:Type[]): Type | undefined{
    return array[array.length - 1]
}

console.log(getLastItemGame(gameScores))
console.log(getLastItemGame(favouriteThings))
console.log(getLastItemGame(voters))