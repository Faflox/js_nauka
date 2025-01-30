function getEmployee(id) {
    return {
        name: 'Tomek',
        age: 35,
        address: 'Grzybowa 100',
        country: 'Poland',
    }

}

function getEmployeeWorkInfo(id){
    return [
        id,
        'ul. gnojowa',
        'Francja',
    ]
}

const {name: fullName, age} = getEmployee(22);
console.log(`pracownik: ${fullName}, ${age}`)

const [id, officeAddress] = getEmployeeWorkInfo(13)
console.log(`${id}, ${officeAddress}`)