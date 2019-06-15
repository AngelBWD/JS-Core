let test = (function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = function () {
            return sum
        };
        return add
    }

})();
console.log(test(1)(9).toString());