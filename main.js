var element = document.getElementById("result");
	
function clickCounter(){
	if (localStorage.clickcount) {
	    localStorage.clickcount = Number(localStorage.clickcount) + 1;
	} else {
	    localStorage.clickcount = 1;
	}
	element.innerHTML = localStorage.clickcount;
}

window.onload = function() {
  element.innerHTML = localStorage.clickcount;
};
