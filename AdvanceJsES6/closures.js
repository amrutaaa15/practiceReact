function outer() {
    count=0;

    function inner() {
        count++;
        return count
    }
    return inner;
}

var counters=new outer();
console.log(counters())
console.log(counters())
console.log(counters())
console.log(counters())