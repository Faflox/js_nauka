interface PersonTutorial {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Address;
}

type Address = {
    street: string;
    city: string;
    country: string;
}

const person1: PersonTutorial = {
    name: "Alice",
    age: 25,
    isStudent: false,  
};

const person2: PersonTutorial = {
    name: "Bob",
    age: 22,
    isStudent: true,
    address: {
        street: "456 Elm St",
        city: "Nowhere",
        country: "Utopia"
    }
};

const person3: PersonTutorial = {
    name: "Charlie",
    age: 30,
    isStudent: false,
    address: {
        street: "789 Oak St",
        city: "Somewhere",
        country: "Reality"
    }
};

const people: PersonTutorial[] = [
    person1, person2, person3
]