function isPrime(nm){
  for (let i=2;i<=(nm/2);i++){
    if(nm%i==0){
      return false;
    }
  }
  return true;
}
let N=prompt("Enter any number");
for (let i=2;i<=N;i++){
  if(isPrime(i)){
    console.log(`The prime number(s) up to given number ${N}: ${i}`);
  }
}