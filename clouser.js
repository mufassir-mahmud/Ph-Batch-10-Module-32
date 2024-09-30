function stopwatch(){
    let count = 0;
    return function(){
        count ++;
        return count
    }
}

const watch = stopwatch();
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());

const watch1 = stopwatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

console.log(watch());