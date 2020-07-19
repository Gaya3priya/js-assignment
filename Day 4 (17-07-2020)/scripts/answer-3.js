console.log("Spread operator!!");
console.log()
let shoppingList = ["Chocolates","Vegetables","Coffee powder"];
let shoppingBasket = shoppingList;
shoppingList.push("Cake");
console.log("Referrrencing the shoppingList")
console.log(shoppingList); 
console.log(shoppingBasket); // reflect changes
console.log()
console.log("Creating a copy of the shoppingList");
shoppingBasket = [...shoppingList];
shoppingList.push("Sandwich");
console.log(shoppingList);
console.log(shoppingBasket); // reflect no changes
console.log()
console.log("Adding new products to the shoppingBasket");
shoppingBasket = ["Pizza",...shoppingList,"Oreo Bisciuts"]; //Adding new products to the list
console.log(shoppingBasket);