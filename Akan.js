function akan(){
	var dateofbirth = document.getElementById("dateofbirth").value;
    var DD = parseInt(dateofbirth);
    var month = document.getElementById("month").value;
    var MM = parseInt(month);
    var year = document.getElementById("year").value;
    var YY = parseInt(year.slice(2)); 
    var CC = parseInt(year.slice(0,2));

}