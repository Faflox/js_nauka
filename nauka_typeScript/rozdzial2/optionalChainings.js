var optionalChainingNS;
(function (optionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: 4
    });
    console.log("Auto: ", car);
    console.log("Informacje o kołach: ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("Liczba kół: ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
})(optionalChainingNS || (optionalChainingNS = {}));
