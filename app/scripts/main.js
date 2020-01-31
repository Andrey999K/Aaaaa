document.addEventListener("DOMContentLoaded", () => {
	// Custom JS
	console.log('Hello, World!');
});

//alert("AAA");

// function question() {
// 	alert("AAAAA");
// 	let aaaaa = document.getElementsByClassName("main__question-description");
// 	aaaaa[0].classList.add('visibile');
// }

// let aaaaa = document.getElementsByClassName("main__question-description");

// aaaaa[0].classList.add('visibile');
let i = 0;

function question(n) {
	let aaaaa = document.getElementsByClassName("main__question-description");
	let bbbbb = document.getElementsByClassName("main__question-content");
	let visibile = document.getElementsByClassName("visibile");
	if (visibile.length > 0) {
		visibile[0].classList.remove('visibile');
		i = 0;
		console.log(i);
	}
	if (i == 0) {
		aaaaa[n].classList.add('visibile');
		bbbbb[n].classList.add('display');
		i = 1;
		console.log(i);
	} else {
		aaaaa[n].classList.remove('visibile');
		bbbbb[n].classList.remove('display');
		i = 0;
		console.log(i);
	}
}