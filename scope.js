function add(a,b){
    const total = a+b;
    console.log(a,b);
    if(b >= 5){
        const sum = 15 + b;
        console.log(sum);
    }
        // console.log(sum); error
    return total;
}
// console.log(total); error
const result = add(5,5);
console.log(result);