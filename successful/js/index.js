$(document).ready(function () {
	// this is ugly, threw it together to make it work.
	var state = true;
	var success_url = document.getElementById('success_url').value;
	var main_url = document.getElementById('main_url').value;

	if (success_url == '')
		success_url = main_url

	setTimeout(function () {
		window.location.href = success_url;
	}, 5000);

	$('.redo').click(function () {
		window.location.href = success_url;
	});

	$('.change').click(function () {
		window.location.href = main_url;
	});

	$('.error').hide().removeClass('animate');

	var reanimate = function () {
		if (state === false) {
			state = true;
			$('.success').show().addClass('animate');
			$('.error').hide().removeClass('animate');
		}
		else {
			state = false;
			$('.success').hide().removeClass('animate');
			$('.error').show().addClass('animate');
		}
	};
});