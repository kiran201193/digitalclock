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
	$('.time')
  .transition({ x: -Math.floor((Math.random() * 250) + 1) })
  .transition({ y: Math.floor((Math.random() * 250) + 1) })
  .transition({ x: 0 })
  .transition({ y: 0 });
};



setInterval(datum, 500)
