interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log('imię uzytkownika:', usr.name);

    if (usr.age >= 16) {
        console.log('moze jezdzic');
    } else {
        console.log('nie moze jezdzic');
    }
}

const tom: User = {
    name: 'Tomek',
    age: 26
}

canDrive(tom);