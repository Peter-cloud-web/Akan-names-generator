function akan(){
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


   
}