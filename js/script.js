Let text = document.getElementById('text');
Let hill1 = document.getElementById('hill1');
Let hill2 = document.getElementById('hill2');
Let hill3 = document.getElementById('hill3');
Let hill4 = document.getElementById('hill4');
Let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () =>{
	Let value =window.scrollY;

	text.style.marginTop = value * 2.5 + 'px'
});
