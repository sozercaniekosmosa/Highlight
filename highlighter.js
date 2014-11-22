var isHighlight = false;

document.body.addEventListener('mousewheel', function () {
	var select = window.getSelection() + '';
	if ((select == '') || (select.length > 110)) return;
	select = select.trim();
	var html = document.body.innerHTML.split(select).join('<x>' + select + '</x>');
	document.body.innerHTML = html;
	isHighlight = true;
}, false);

document.body.addEventListener('mousedown', function () {
	if (!isHighlight) return;
	var html = document.body.innerHTML.split('<x>').join('');
	html = html.split('</x>').join('');
	document.body.innerHTML = html;
	isHighlight = false;
}, false);