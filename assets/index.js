const mobBtn = document.getElementById('header__mobile-menu');
const mobMenu = document.getElementById('header__nav');

mobBtn.addEventListener('click', mobMenuShowByClick);

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = () => resize_info();
});
 
function resize_info() {
	if(document.body.clientWidth > 620) {
		mobMenuHide();
	}
}

function mobMenuShowByClick() {
    mobMenu.classList.toggle('js-opened');
}

function mobMenuHide() {
    mobMenu.classList.remove('js-opened');
}
