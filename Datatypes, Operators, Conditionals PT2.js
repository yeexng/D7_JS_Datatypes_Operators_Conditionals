// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* function gender(isMale)  {
    return(isMale ? "with beard": "no beard")}
    console.log(gender(true));
    console.log(gender(false));
    console.log(gender(null)); */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* let x = 8 - 
twoIntegersAreEqualTo8 =   */

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

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(10, 100));
  console.log(fits(10, 101));   */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* let x= 20 ;
let y= 400; 
let value = x * (y/100)

console.log(value) */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* let number = 100;

if (number % 2 ===0){
    console.log("even")
} else{
    console.log("odd")
} */
