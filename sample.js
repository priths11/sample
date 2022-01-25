function sort() {
	var arr = [];
	const mainEle = document.getElementById('shuffleAndSort')
	arr = arrPull();
	arr.sort(function (a,b) {
			return a-b;
	});
	mainEle.innerHTML = "";
	for (let j = 0; j < arr.length; j++) {	  		
		var li = document.createElement("li");
		li.className = "li-" + j
		li.innerHTML = arr[j];	
		mainEle.appendChild(li);
	}	
	console.log(arr);
}

function arrPull() {
	const arr = [];
	const ul = document.querySelectorAll('ul li');
	for (let i = 0; i <= ul.length - 1; i++) {		
		arr.push(ul[i].innerHTML);		
	}
	return arr;
}

function shuffle() {
	var arr = [];
	const mainEle = document.getElementById('shuffleAndSort')
	arr = arrPull();
	const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
	mainEle.innerHTML = "";
	for (let j = 0; j < arr.length; j++) {	  		
		var li = document.createElement("li");
		li.className = "li-" + j
		li.innerHTML = arr[j];	
		mainEle.appendChild(li);
	}
	console.log(arr);

}
