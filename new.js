		const slider = document.getElementById('slider');
		const images = Array.from(slider.getElementsByTagName('img'));
		let currentImage = 0;
		setInterval(() => {
		  images[currentImage].classList.remove('active');
		  currentImage = (currentImage + 1) % images.length;
		  images[currentImage].classList.add('active');
		}, 3000);