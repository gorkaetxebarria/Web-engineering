window.onload = function(){
  document.querySelectorAll("a").forEach(function(element){
			element.addEventListener("click", change);
	});

	document.querySelectorAll("article").forEach(function(element){
			element. addEventListener("click", hoverNav);
	});
}

function change(e){
	let id = e.currentTarget.id;
	id = id.substring(4, id.length)
	//	let id = e.currentTarget.innerHTML;
	//  id = id.toLowerCase();

	clearClass("hoverNav");
	clearClass("selected");
	document.getElementById(id).classList.add("selected");
}

function hoverNav(e){
	let id = e.currentTarget.id;
	id = "nav_" + id;

	clearClass("hoverNav");
	document.getElementById(id).classList.add("hoverNav");
}

function clearClass(str){
	document.querySelectorAll("."+str).forEach(function(element){
		element.classList.remove(str);
	});
}