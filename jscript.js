var date = new Date() 
var hours = date.getHours() 
var mins = date.getMinutes()
var secs = date.getSeconds()

function datum () {
	var d = new Date() 
	hours = d.getHours();
	mins = d.getMinutes();
	secs = d.getSeconds();
	$("#hours").html(hours);
	$("#mins").html(mins); 
	$("#secs").html(secs); 

};

setInterval(datum, 500)
