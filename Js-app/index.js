const animateBtn = document.getElementById('animate-btn');
animateBtn.addEventListener('click', () => {
	const heading = document.querySelector('h1');
	heading.style.animation = 'color-change 1s ease-in-out alternate infinite';
});

