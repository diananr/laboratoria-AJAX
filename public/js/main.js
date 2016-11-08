$(document).ready(function(){
	$.getJSON(
		window.location.href + "demo.json",
	
		function(response){
			var names = "<ul>";
			var celus = "<ul>";
			var email = "<ul>";
			var l = response.length;

			for(var i=0; i<l;i++){
				names += "<li>"+ response[i].nombre+"</li>";
				celus += "<li>"+ response[i].celular+"</li>";
				email += "<li>"+ response[i].correo+"</li>";
			}

			names += "</ul>";
			celus += "</ul>";
			email += "</ul>";

			$("#nombres").html(names);
			$("#celulares").html(celus);
			$("#correos").html(email);
		}
	);
});