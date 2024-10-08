//IF STATEMENT

let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

//ELSE STATEMENT
let age2 = 25;
if (age2 >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

//ELSE IF STATEMENT

let grade = 20;
if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("Good");
} else {
    console.log("Needs Improvement")
}

// CONDITIONAL TERNARY OPERATOR
let grade1 = 85;
// grade1 >= 90 ? console.log("Excellent") : console.log("Needs Improvement");
// //output: Needs Improvement

//TO CONTINUE
grade1 >= 90 ? console.log("Excellent") 
: grade1 >= 80 ? console.log("Good")
: console.log("Needs Improvement");

//SWITCH STATEMENT
let day = "Sunday"
switch (day) {
    case "Monday":
        console.log("It is Monday");
        break;
    case "Tuesday":
        console.log("It is Tuesday");
        break;
        default:
    console.log("It is neither Monday or Tuesday or other day");
}

//FOR LOOP
for (let i = 0; i < 5; i++){
    console.log("Iteration", i);
}

for (let i = 0; i < 5; i++){
    console.log(i);
}

//output: 
// 0
// 1
// 2
// 3
// 4
// //INDEX ALWAYS STARTS AT 0

//WHILE LOOP
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//DO WHILE
//similar to while loop but the code block executes at least once before the condition is check
let count1 = 0;
do {
    console.log(count1);
    count1++;
} while (count1 < 10);

// //output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// function showAlert(){
//     alert("Al it");
// }

function askName() {
    let userName = prompt("What is your name?");
    if (userName){
        alert("Hello, " + userName + ". How are you?");
    } else {
        alert("You did not provide a name!");
    }
}