interface PersonFind{
    name: string;
    age: number;
}

const filterItems: PersonFind[] = [
    { name: 'Jan', age: 20 },
    { name: 'Linda', age: 22 },
    { name: 'Jan', age: 40}
]

const jons:PersonFind[] = filterItems.filter((item) => item.name === 'Jan');
console.log(jons)