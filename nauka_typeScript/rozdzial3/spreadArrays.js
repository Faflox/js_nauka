var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var SpreadArray;
(function (SpreadArray) {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    var array3 = __spreadArray(__spreadArray([], array1, true), array2, true);
    var array4 = array1.concat(array2);
    console.log("C: ".concat(array3));
    console.log("D: ".concat(array4));
    array1.push(10);
    console.log("A: ".concat(array1));
    console.log("C: ".concat(array3));
    console.log("D: ".concat(array4));
})(SpreadArray || (SpreadArray = {}));
