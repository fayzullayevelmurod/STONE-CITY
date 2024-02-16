var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	loop: true
});

var swiper = new Swiper(".work-swiper", {
	slidesPerView: 2,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next2",
		prevEl: ".swiper-button-prev2",
	},
});


var swiper = new Swiper(".discount-swiper", {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next3",
		prevEl: ".swiper-button-prev3",
	},
});

const readMore = document.querySelector('.read-more');
const readMoreText = document.querySelector('.hide-text');

readMore.addEventListener('click', () => {
	if (readMoreText.classList.contains('hidden')) {
		readMore.textContent = 'Скрыть текст';
		readMoreText.classList.remove('hidden');
		readMoreText.classList.add('block');
	} else {
		readMore.textContent = 'Читать весь текст';
		readMoreText.classList.remove('block');
		readMoreText.classList.add('hidden');
	}
});

var acc = document.getElementsByClassName("accordion");
var i;

// Manually set the first accordion to be active
acc[0].classList.add("active");
var firstPanel = acc[0].nextElementSibling;
firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
acc[0].querySelector('img').src = "./src/images/icons/minus.svg"; // Change the path accordingly

// Add event listeners to the rest of the accordions
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		// Close all other accordions
		for (var j = 0; j < acc.length; j++) {
			if (j !== i) {
				acc[j].classList.remove("active");
				var otherPanel = acc[j].nextElementSibling;
				otherPanel.style.maxHeight = null;
				acc[j].querySelector('img').src = "./src/images/icons/pluse.svg";
			}
		}

		// Toggle the clicked accordion
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			this.querySelector('img').src = "./src/images/icons/pluse.svg";
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			this.querySelector('img').src = "./src/images/icons/minus.svg"; // Change the path accordingly
		}
	});
}
