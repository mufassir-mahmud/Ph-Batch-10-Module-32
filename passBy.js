let a = 5;
let b = 10;
function add(num1,num2){
    num1 = 20
    const total = num1 + num2;
    return total
}

const result = add(a,b);
console.log(result);
console.log(a,b);


let x = {name : 'Mufassir', age: 23}
let y = {name : 'Fahim', age: 18}

function person(p1,p2){
    p1.name = 'Omar';
    p2.name = 'Sohan'
    const name1 = p1.name;
    const name2 = p2.name;
    console.log(name1, name2);
}
console.log(x.name, y.name);
const man = person(x,y)
console.log(x.name, y.name);