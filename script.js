const items = document.querySelectorAll('.item');
document.querySelector('.items').style.minHeight = (window.screen.height * 0.7) + 'px';

items.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        loseFocus();
        item.classList.add('selected');
    });

    loseFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        });
    };
})

screen.orientation.addEventListener('change', function (e) {
	if (e.currentTarget.type === 'landscape-primary') {
		document.querySelector('.items').style.minHeight = (window.screen.height * 0.7) + 'px';
	} else if (e.currentTarget.type === 'portrait-primary') {
		document.querySelector('.items').style.minHeight = (window.screen.height * 0.7) + 'px';
	}
})