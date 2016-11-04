$(document).ready(function(){
	$.ajax({
		url:"http://localhost:2508/demo.json",
		type:"GET",
		success: function(response){
			var names = "<ul>";
			for(var i=0, l=response.length; i<l;i++){
				names += "<li>"+ response[i].nombre+"</li>";
			}
			names += "</ul>";
			$("#nombres").html(names);
			var celus = "<ul>";
			for(var i=0, l=response.length; i<l;i++){
				celus += "<li>"+ response[i].celular+"</li>";
			}
			celus += "</ul>";
			$("#celulares").html(celus);
			var email = "<ul>";
			for(var i=0, l=response.length; i<l;i++){
				email += "<li>"+ response[i].correo+"</li>";
			}
			email += "</ul>";
			$("#correos").html(email);
		}
	});
});