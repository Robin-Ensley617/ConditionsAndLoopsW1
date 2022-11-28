//create a variable to hold the quantity of available plane seats left on a flight
    var seatsAvailable = 5;
		
//create a variable to hold the cost of groceries at checkout
    var costOfGroceries= 120.11;

//create a variable to hold a person's middle initial
    var middleInitial = "D";

//create a variable to hold true if it's hot outside and false if it's cold outside
    var isHotOutside = true;
    var isColdOutside = false;

//create a variable to hold a customer's first name
    var firstName = "Robin";

//create a variable to hold a street address
    var streetAddress = "123 Street Ave"

//print all variables to the console
    console.log(seatsAvailable);
    console.log(costOfGroceries);
    console.log(middleInitial);
    console.log(isHotOutside);
    console.log(isColdOutside);
    console.log(firstName);
    console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
    console.log(seatsAvailable - 2);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries + 2.15);

//birth certificate was printed incorrectly, change the middle initial to something else
 console.log(middleInitial = "F")

//the season has changed, update the hot outside variable to be opposite of what it was
    console.log(isHotOutside=false)

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = firstName + " " + middleInitial + " Ensley"

//print a line to the console that introduces the customer and says they live at the address variable
console.log(fullName + " lives at address " + streetAddress);