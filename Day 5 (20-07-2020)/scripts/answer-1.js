let number= +prompt("Enter a positive number");
function range(number){
    let arr=[];
    for (let i=1;i<=number;i++){
        arr.push(i);
    }
    return arr;
}
arr1=range(number);
let result=arr1.filter (el=>{
    if(el%2!=0){
       return el;
    }   
})
let cubes=result.map((el)=>el**3);
console.log(cubes);