const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
container.addEventListener('click', function(event) {
	// cek apakah yang diklik adalah thumb
	if (event.target.className = 'thumb') {
			jumbo.src = event.target.src;
			jumbo.classList.add('fade');
			setTimeout(function() {
				jumbo.classList.remove('fade');
			}, 500);

			thumbs.forEach(function(thumb) {
				/*
					if (thumb.classList.contains('active')) {
						thumb.classList.remove('active');
					}
				*/
				thumb.className = 'thumb';
			})

			event.target.classList.add('active');
	}
})