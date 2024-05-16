

let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
	let value =window.scrollY;

	text.style.marginTop = value * 2.5 + 'px'
	hill1.style.top = value * -0.2 + 'px';

	hill2.style.left = value * 1 + 'px';
	hill3.style.left = value * -1 + 'px';
	hill2.style.top = value * -0.2 + 'px';
	hill3.style.top = value * -0.2 + 'px';
	
	hill5.style.left = value * -0.5 + 'px';
});



document.getElementById('next').onclick = function(){	
	let list = document.querySelectorAll('.item');
	document.getElementById('slide').appendChild(list[0]);
}
document.getElementById('prev').onclick = function(){	
	let lists = document.querySelectorAll('.item');
	document.getElementById('slide').prepend(lists[lists.length - 1]);

	.2335978416330
}

