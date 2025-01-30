function canDrive(usr) {
    console.log('imię uzytkownika:', usr.name);
    if (usr.age >= 16) {
        console.log('moze jezdzic');
    }
    else {
        console.log('nie moze jezdzic');
    }
}
var tom = {
    name: 'Tomek',
    age: 26
};
canDrive(tom);
