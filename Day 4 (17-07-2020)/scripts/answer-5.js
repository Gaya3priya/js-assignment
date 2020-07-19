let salesPersons = +prompt("Enter total number of sales persons:");
let total= +prompt("Enter the total earned amount:");
for (i=1;i<=salesPersons;i++){
    let sales = +prompt(`Enter the sales done by salesPerson${i}`);
    if (sales>0 && sales<=5000)
        console.log(`Comminsion earned by salesPerson${i}=${(2/100)*total}`);
    else if (sales>5000 && sales<=10000)
        console.log(`Comminsion earned by salesPerson${i}=${(5/100)*total}`);
    else if (sales>10000 && sales<=20000)
        console.log(`Comminsion earned by salesPerson${i}=${(7/100)*total}`);
    else if (sales>20000)
        console.log(`Comminsion earned by salesPerson${i}=${(10/100)*total}`)        
    
}