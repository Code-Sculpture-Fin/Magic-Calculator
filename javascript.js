//Arithmatic funcrion

function add(No1, No2){
    let result = No1 + No2;
    
    return result;
    
}


function subtract(No1, No2){
    let result = No1 - No2;
    
    return result;
    
}


function multiply(No1, No2){
    let result = No1 * No2;
    
    return result;
    
}


function divide(No1, No2){
    if (No2==0){
        return "Invalid Number";
    }
    else{
        let result = No1/No2;
        return result;
    }
}


//Magic Operation function


function magicOperation(result){
    switch(true){
        case result > 100 && result % 2 == 0:{
            return "Magic dust makes a number grow: " + (result * 5);
        }
        case result < 100 && result % 2 == 0:{
            return "A magic gnome doubles the number: " + (result * 2);
        }
        default:
            return "A number is not match for magic and remains unchanged !! ";

    }

}
console.log(magicOperation())

// Loop for Repetitive Execution


function continueCalculating() {
    let input;
    let operation= null;

    while (true) {
        input = prompt("Again give your operation Add, Subtract, Multiply, Divide (type 'exit' to quit):").trim().toLowerCase();

        if (input === 'exit') {
            document.getElementById("output").innerHTML = "Goodbye!";
            break;
        } 
        
        
        
        else {
            let operation = null;
            switch (input) {
                case 'add':
                    operation = add;
                    break;
                case 'subtract':
                    operation = subtract;
                    break;
                case 'multiply':
                    operation = multiply;
                    break;
                case 'divide':
                    operation = divide;
                    break;
                default:
                    document.getElementById("output").innerHTML = "Please choose from Add, Subtract, Multiply, Divide, or type 'exit' to quit.";
                    return;
            }

            let No1 = parseInt(prompt("Enter the first number:"));
            let No2 = parseInt(prompt("Enter the second number:"));

            
            let result = operation(No1, No2);
            document.getElementById("output").innerHTML = "Result: " + result + "<br>" + magicOperation(result);
        }
    }
}

continueCalculating();

