function add(a,b,c){
 const total = a+b+c;
 for(let argument in arguments){
    console.log(arguments[argument]);
 }
 return total
}

const sum = add(5,5,5,6,7,8);
console.log(sum);