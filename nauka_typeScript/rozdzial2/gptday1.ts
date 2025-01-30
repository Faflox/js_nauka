// function osoba(name: string, age?: number){
//     let wynik:string = 'Imię: ' + name
//     if(age !== undefined){
//         wynik += `, Wiek: ${age}`
//     }
//     console.log(wynik)
// }

// osoba('Rafał', 43)


///////////
enum Status {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

function isDelivered(status:Status): boolean{
    return status === Status.Delivered;
}

console.log(isDelivered(Status.Pending));
console.log(isDelivered(Status.Delivered));