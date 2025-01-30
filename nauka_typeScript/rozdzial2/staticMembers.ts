(function() {

class ClassA {
    static typeName: string;
    constructor(){}
    static getFullName(){
        return "ClassA " + ClassA.typeName;
    }
}

ClassA.typeName = "Exampletypename";
const a = new ClassA();
console.log(ClassA.typeName);
})();
