console.log("Calculator");
let num1= +prompt("Enter your first number");
let num2= +prompt("Enter your second number");
let operator=prompt("Enter the operator to perform calculation");
switch(operator)
{
    case "+": console.log(num1+num2);
              break;
    case "-": console.log(num1-num2);
              break;
    case "*": console.log(num1*num2);
              break;
    case "/": console.log(num1/num2);
              break;
    case "SR":
               number1=Math.sqrt(num1);
               number2=Math.sqrt(num2);
               console.log(`squareroot of number1 is ${number1} and squareroot of number2 is ${number2}.`)
               break;
    case "%": console.log(num1%num2);
            break; 
    default:console.log("Enter operand as '+' or '-' or '*' or '/' or 'SR' or '%'")                                                          
}