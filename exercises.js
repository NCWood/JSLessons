/*1. Write a JavaScript program to display the current day and time in the following format.
Today is : Friday. 
Current time is : 4 PM : 50 : 22*/

var today = new Date();	//is Date an established function in js? It's an object.
var day = today.getDay();  //is getDay an est f'n in js? It's a Method.
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var period = (hour >= 12)? " PM ": " AM ";
hour = (hour >= 12)? hour - 12: hour;

if  (hour===0 && period=== ' PM ')	{
	if (minute===0 && second===0)	{
		hour = 12;
		period= ' Noon ';
	}	else{
		hour = 12;
		period = ' PM ';
	}
}

if (hour===0 && prepend===' AM ')	{
	if (minute===0 && second===0)	{
		hour = 12;
		period = ' Midnight ';
	}	else	{
		hour = 12;
		period = ' AM ';
	}
}
console.log("Current Time : " + hour + " : " + minute + " : " + second + period);

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*2. Write a JavaScript program to print the contents of the current window*/
function print_current_page()	{
	window.print();
}


/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*3. Write a JavaScript program to get the current date. */

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd<10)	{
	dd = '0' + dd;
}

if (mm<10)	{
	mm = '0' + mm;
}

today = mm+ '-' +dd+ '-' +yyyy;
console.log(today);
today = mm+ '/' +dd+ '/' +yyyy;
console.log(today);  

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

var side1 = 5;
var side2 =6;
var side3 = 7;
var semiPeri = (side1 + side2 + side3)/2;
var area = Math.sqrt(semiPeri*((semiPeri - side1)*(semiPeri - side2)*(semiPeri - side3)));
console.log(area);

/*-----------------------------------------{ncw}--------------------------------------------------------*/


/*5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing 
one letter from the end of the string and attaching it to the front. */

function animate_string(id)	{
	
	var element = document.getElementById(id);
	var textNode = element.childNodes[0];
	var text = textNode.data;
	
	setInterval(function ()	{
		
		text = text[text.length - 1] + text.substring(0, text.length -1);
			textNode.data = text;
	}, 100);
}

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar*/

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);  


/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. */

for (var year = 2014; year <= 2050; year++)	{
	var d = new Date(year, 0,  1);
	if ( d.getDay() === 0 )
		console.log("1st January is being a Sunday  "+year);
}

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched". */

var num = Math.ceil(Math.random() * 10);
var guessNum = prompt('Guess a number between 1 and 10');
if (guessNum == num){
	alert('Good Work! The number was ' + num);
}	else {
	alert('Sorry, not a match, the number was ' + num);
}

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*9. Write a JavaScript program to calculate days left until next Christmas. */

var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() ===11 && today.getDate() > 25)	{
	xmas.setFullYear(xmas.getFullYear() + 1);
}
var one_day = 1000*60*60*24;
console.log(Math.ceil((xmas.getTime() -today.getTime())/(one_day))+ " days left until Christmas!");

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). */

function multiplyBy()  
{  
        num1 = document.getElementById("firstNumber").value;  
        num2 = document.getElementById("secondNumber").value;  
        document.getElementById("result").innerHTML = num1 * num2;  
}  
  
function divideBy()   
{   
        num1 = document.getElementById("firstNumber").value;  
        num2 = document.getElementById("secondNumber").value;  
document.getElementById("result").innerHTML = num1 / num2;  
}  

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.*/

function cToF(celsius)	{
	var cTemp = celsius;
	var cToFahr = cTemp * (9/5) + 32;
	var message = cTemp+'\xB0C is ' + cToFahr + '\xB0F.';
	console.log(message);
}

function fToC(fahrenheit)	{
	var fTemp = fahrenheit;
	var fToCel = (fTemp - 32) * (5/9);
	var message = fTemp+ '\xB0C is ' + fToCel + '\xB0C.';
	console.log(message);
}

cToF(60);
fToC(45);

/*-----------------------------------------{ncw}--------------------------------------------------------*/

/*12. Write a JavaScript program to get the website URL (loading page) */

alert(document.URL);

/*-----------------------------------------{ncw}--------------------------------------------------------*/




















