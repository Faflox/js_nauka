interface Pizza{
    id: number;
    name: string;
    price: number;
}

type Order = {
    id: number;
    pizza: string;
    status: 'ordered' | 'completed';
}

let pizzaId = 1

const menu: Pizza[] = [
    { id: pizzaId++, name: 'margherita', price: 8.99 },
    { id: pizzaId++, name: 'pepperoni', price: 10.99 },
    { id: pizzaId++, name: 'hawaiian', price: 11.99 },
    { id: pizzaId++, name: 'veggie', price: 9.99 }
];

let cashInRegister:number  = 1000
const orderingQueue: Order[] = [];
let nextOrderId = 1

function addNewPizza(pizza: Omit<Pizza, 'id'>): Pizza {
    const pizzaObj:Pizza = {id: pizzaId++, ...pizza}
    menu.push(pizzaObj);
    return pizzaObj
}

function placeOrder(pizzaName: string): Order | null{
    const pizza = menu.find(p => p.name === pizzaName);
    if(pizza){
        cashInRegister += pizza.price;
        let orderObj: Order = {id: nextOrderId++, pizza: pizza.name, status:'ordered'};
        orderingQueue.push(orderObj);
        return orderObj;
    } else {
        console.log(`Pizza ${pizzaName} is not in the menu`);
        return null;
    }
}

function completeOrder(id:number):Order | null{
    const completedOrder = orderingQueue.find(o => o.id === id);
    if(completedOrder){
        completedOrder.status = 'completed';
        return completedOrder;
    } else {
        return null;
    }
}

export function getPizzaDetail(identifier: string | number): string | Pizza{
    if(typeof identifier === 'string'){
        const pizza = menu.find(p => p.name === identifier.toLowerCase());
        return pizza? pizza: `No pizza with name ${identifier}`
    } else if (typeof identifier === 'number'){
        const pizza = menu.find(p => p.id === identifier);
        return pizza? pizza: `No pizza with id ${identifier}`
    } else {
        return `Invalid type`
    }
}
addNewPizza( { name: 'bbq chicken', price: 12.99 });
addNewPizza( { name: 'four cheese', price: 10.49 });
addNewPizza( { name: 'meat lovers', price: 13.99 });

placeOrder('bbq chicken');
completeOrder(1);

console.log(menu);
console.log(getPizzaDetail(10))