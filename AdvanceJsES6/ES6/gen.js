function * gen(){
    // index=0;
    // while(true){
    //     yield index++;
    // }
    yield 1;
    yield 2;
}

let g=gen();
console.log(g.next())
console.log(g.next())
console.log(g.next())