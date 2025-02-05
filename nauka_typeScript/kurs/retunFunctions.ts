function getRandomInt(min:number, max:number): number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

type boobaValue = {
    value: number;
    context: 'greater' | 'smaller' | 'equal';
}

type counterListValue = {
    sumValue: number;
    context: 'greater' | 'smaller' | 'equal';
}

const boobaList: boobaValue[] = [] 
const contextNumber = 3


for (let index = 0; index < 100; index++) {
    let booba: number = getRandomInt(1,10);
    let boobaElement: boobaValue;
    if(booba < contextNumber){
        boobaElement = {value: booba, context: 'smaller'};
    } else if(booba > contextNumber){
        boobaElement = {value: booba, context: 'greater'};
    } else {
        boobaElement = {value: booba, context: 'equal'};
    }
    boobaList.push(boobaElement)
}    

const greaterCount:counterListValue = {sumValue: boobaList.filter(item => item.context === 'greater').length, context: 'greater' }
const equalCount:counterListValue = {sumValue: boobaList.filter(item => item.context === 'equal').length, context: 'equal'}
const smallerCount:counterListValue = {sumValue: boobaList.filter(item => item.context === 'smaller').length, context: 'smaller'}


const counterList:counterListValue[] = [greaterCount, equalCount, smallerCount]


console.log(boobaList)
console.log(counterList.map(item => `${item.context}: ${item.sumValue}`).join(', '))