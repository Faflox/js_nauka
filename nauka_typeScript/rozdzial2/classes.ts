class Person{
    constructor(private readonly msg:string){}
    speak() {
        this.msg = 'mówię: ' + this.msg;
        console.log(this.msg);
    }
}

const tom = new Person('Cześć');
// tom.msg = 'cześć';
tom.speak();