// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* 
let isMale = true;
let myGender = isMale ? "male":"female";
console.log(myGender);

*/

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* 
let varx = 5;
let vary = 3;
if((varx === 8) || (vary === 8) || (varx + vary === 8) || (varx - vary === 8)){
    console.log("condition is true")
} else {
    console.log("condition is false")
}
*/

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* let concetenation = "concete" + "nation"
    console.log(concetenation)
*/

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* 
let x = 1; 
let y = 2;
let z = 3;

let highestValues = z + "," + y + "," + x ;
let lowestValues= x + "," +  y + "," + z ;

if (highestValues){
    console.log(highestValues)
} else{
    console.log(lowestValues)}

 or

let x= 1;
let y= 2;
let z= 3;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}        

*/ 

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* 
let x = 4; 
let y = 2;

let averageIntegers = (x + y) / 2;
console.log(averageIntegers)  */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* let string3="aaa"
let string4="a" 
if (string3.length>string4.length){
    console.log("3 is longer")
} else {
    console.log("4 is longer")
}
    */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* 
let maybeAnInterger = 5.5555;
(maybeAnInterger % 1) === 0 ? (console.log("It's an integer")):(console.log("It is not an integar..."));
*/

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* 
let x= 20 ;
let percentage= 400; 
let value = x * (y/100)

console.log(value) */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* let number = 100;

if (number % 2 === 0){
    console.log("even")
} else{
    console.log("odd")
} */
