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
const readMoreIcon = document.querySelector('.read-more__icon');

readMore.addEventListener('click', () => {
	if (readMoreText.classList.contains('hidden')) {
		readMore.textContent = 'Скрыть текст';
		readMoreText.classList.remove('hidden');
		readMoreText.classList.add('block');
		readMoreIcon.classList.add('rotate-180');
	} else {
		readMore.textContent = 'Читать весь текст';
		readMoreIcon.classList.remove('rotate-180');
		readMoreText.classList.remove('block');
		readMoreText.classList.add('hidden');
	}
});

let acc = document.getElementsByClassName("accordion");
let i;

// Manually set the first accordion to be active
acc[0].classList.add("active");
let firstPanel = acc[0].nextElementSibling;
firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
acc[0].querySelector('img').src = "./src/images/icons/minus.svg";

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		// Close all other accordions
		for (let j = 0; j < acc.length; j++) {
			if (j !== i) {
				acc[j].classList.remove("active");
				let otherPanel = acc[j].nextElementSibling;
				otherPanel.style.maxHeight = null;
				acc[j].querySelector('img').src = "./src/images/icons/pluse.svg";
			}
		}

		this.classList.toggle("active");
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			this.querySelector('img').src = "./src/images/icons/pluse.svg";
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			this.querySelector('img').src = "./src/images/icons/minus.svg";
		}
	});
}

// Modal
const searchModalClose = document.querySelector('.search-modal__close');
const searchModal = document.querySelector('.search-modal');
const searchModalOpen = document.querySelector('#search-modal-open');

function openModal() {
	searchModal.classList.remove('hidden');
	searchModal.classList.add('block');
	document.body.style.overflow = 'hidden';
}

function closeModal() {
	searchModal.classList.remove('block');
	searchModal.classList.add('hidden');
	document.body.style.overflow = 'auto';
}

searchModalOpen.addEventListener('click', openModal)

searchModalClose.addEventListener('click', closeModal)

document.body.addEventListener('click', (e) => {
	if (e.target === searchModal && searchModal.classList.contains('search-modal')) {
		closeModal();
	}
})