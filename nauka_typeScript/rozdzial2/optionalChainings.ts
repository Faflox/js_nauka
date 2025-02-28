namespace optionalChainingNS{
    interface Wheels{
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels;    
    }

    class Automobile implements Vehicle{
        constructor(public wheels?: Wheels){}
    }

    const car: Automobile | null = new Automobile({
        count: 4
    });
    console.log("Auto: ", car);
    console.log("Informacje o kołach: ", car?.wheels);
    console.log("Liczba kół: ", car?.wheels?.count);
}