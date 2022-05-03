/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
// Datatypes in JavaScript
There are 7 datatypes in JavaScript
1) Numbers - Can be nay Number (41, -32, 0, 21.0256,...)
             
2) Strings - String is a sequence of Chracters.
             Each element in a string occupies a position
             Length of a string is number of elements in it.

3) Boolean - Boolean represents logical entry and can have only two values: True or False.

4) undefined - Undefined represents value that does not exist yet.
               Everytime, we declare a variable, its content is undefined

5) null - null repersents empty value.
          The variable contains nothing.
6) BigInt
7) Symbol

*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*
-Variables are containers for storing data
-There are two types of variables: local variable and global variable
- Variables are case sensitive. For eg., x and X are diffenet variables.

*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
/*
let a = 12
let b = 20

// Add two numbers
let sum = a + b

// Display Sum
console.log("The sum of a and b is: sum ")
console.log(a)
console.log(b)
console.log(sum)
*/


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/*
var x
var x = 12
console.log(x)
*/



/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/*
var name
var name = "John Doe"

console.log(name)
*/


/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/*
let y = 12
console.log(y)

//Substract two  numbers
let difference = y - x

//Display Result
console.log("The difference of y and x is: difference")
console.log(difference)
*/


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/*
var name1 = "john"
var name2 = "John"

console.log("\n -------Equality------")
console.log("Is john equal to John", name1.toLowerCase() === name2.toLowerCase() )
*/



/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* 
var x = [ '1', '2', '3', '4', '5', '6', '7', '8', '9'] 

console.log(x)

if (x === 1) {
    console.log("One")
} else {
    console.log("none")
}
*/



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/









// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

/*
let name = "Naveen"
let age = 23
console.log(age)
console.log(name)
console.log("Result is:", name + age)
*/


/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/


let x = 4
let y = 6

console.log(x)
console.log(y)

console.log("The average of x and y is:", (x + y)/2)



/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
