function check(n){
    return ((n<=100) && (n != null))?true:false;
}
let num;
do{
    num= prompt("Enter a number greater than 100:");
}while(check(num))
console.log(`The number is ${num}`)