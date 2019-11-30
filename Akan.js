ffunction akan(){

var dateofbirth = document.getElementById("dateofbirth").value;
var DD = parseInt(dateofbirth);
var month = document.getElementById("month").value;
var MM = parseInt(month);
var year = document.getElementById("year").value;
var YY = parseInt(year.slice(2)); 
var CC = parseInt(year.slice(0,2));

var Day =  Math.ceil((((((CC/4) - 2 * CC - 1) + ((5 * YY/4)) + ((26 * MM + 1)/10)) + DD ) % 7));
alert( "You were born on " +Day + "of the week"); 

if (Operators = "Male" && Day == 0) {
    alert("You were born on Sunday so your Akan name is Kwasi");
}
else if (Operators = "Male" && Day == 1){
    alert("You were born on Monday so your Akan name is Kwadwo");
} 
else if (Operators = "Male" && Day == 2){
    alert("You were born on Tuesday so your Akan name is Kwabena");
} 
else if (Operators = "Male" && Day == 3){
    alert("You were born on Wednesday so your Akan name is Kwaku");
} 
else if (Operators = "Male" && Day == 4){
    alert("You were born on Thursday so your Akan name is Yaw");
} 
else if (Operators = "Male" && Day == 5) {
    alert("You were born on Friday so your Akan name is Kofi");
} 
else if (Operators = "Male" && Day == 6) {
    alert("You were born on Saturday so your Akan name is Kwame");
} 
else if (Operators = "Female" && Day == 0) {
    alert("You were born on Sunday so your Akan name is Akosua");
} 
else if (Operators = "Female" && Day == 1) {
    alert("You were born on Monday so your Akan name is Adwoa");
} 
else if (Operators = "Female" && Day == 2) {
    alert("You were born on Tuesday so your Akan name is Abenna");
} 
else if (Operators = "Female" && Day == 3) {
    alert("You were born on Wednesday so your Akan name is Akua");
} 
else if (Operators = "Female" && Day == 4) {
    alert("You were born on Thursday so your Akan name is Yaa");
} 
else if (Operators = "Female" && Day == 5) {
    alert("You were born on Friday so your Akan name is Afua");
}  
else if (Operators = "Female" && Day == 6) {
    alert("You were born on Saturday so your Akan name is Ama");
} 

	
 } 

