type PersonGPT = {
    name: string
    age: number
}

interface UserGpt {
    id: number;
    name: string;
    email?: string;
}

enum Zamówienie{
    'Pending',
    'Shipped',
    'Delivered'
}

const imieMoje: string = 'Rafał'
let mojWiek: number = 24
let czyProgramista: boolean = true
const liczby: number[] = [1,2,3,4,5,6]
const osobaMoja: PersonGPT = {name: imieMoje, age: mojWiek}


const sum = (a:number, b:number):number => a + b;

function introduceMnieGPT(imie:string, wiek:number): string{
    return `Cześć, jestem ${imie} i mam ${wiek} lat.`
}

let user:UserGpt = {
    id: 3,
    name: 'tomo',
    email: 'booba@com'
}

let sum1 = sum(3, 6)

function checkOrderStatus(status: Zamówienie): string {
    switch (status) {
        case Zamówienie.Pending:
          return "Twoje zamówienie jest w trakcie realizacji.";
        case Zamówienie.Shipped:
          return "Twoje zamówienie zostało wysłane.";
        case Zamówienie.Delivered:
          return "Twoje zamówienie zostało dostarczone.";
        default:
          return "Nieznany status.";
      }
}

console.log(sum1)
console.log(introduceMnieGPT('tomek', 23))

