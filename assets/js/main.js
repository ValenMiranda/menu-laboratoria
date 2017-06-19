var elemento = Array.from(document.getElementsByClassName("link"));
document.getElementById("menu").addEventListener("click", function(){
	elemento.forEach(function(a){
		a.classList.toggle("mostrar");
		a.classList.toggle("hiden");
	});
});