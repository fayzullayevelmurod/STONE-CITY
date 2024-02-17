document.addEventListener('DOMContentLoaded', function () {
	//  swiper
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
		breakpoints: {
			1390: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});


	var swiper = new Swiper(".discount-swiper", {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next3",
			prevEl: ".swiper-button-prev3",
		},
		breakpoints: {
			1150: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			720: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			542: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		}
	});


	// media menu
	const headerMenuTop = document.querySelector('.header-menu__top');
	const openMenuBtn = document.querySelector('.header-top__btn');
	const closeMenuBtn = document.querySelector('.close-menu')
	function showMenu() {
		headerMenuTop.classList.toggle('translate-x-[-100%]');
	}

	openMenuBtn.addEventListener('click', showMenu);
	closeMenuBtn.addEventListener('click', showMenu);


	// read more
	try {
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
	} catch (error) {
		throw error
	}

	// accordion
	try {
		// let acc = document.querySelectorAll(".accordion");
		// let i;

		// acc[0].classList.add("active");
		// let firstPanel = acc[0].nextElementSibling;
		// firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
		// acc[0].querySelector('img').src = "./src/images/icons/minus.svg";

		// for (i = 0; i < acc.length; i++) {
		// 	acc[i].addEventListener("click", function () {
		// 		for (let j = 0; j < acc.length; j++) {
		// 			if (j !== i) {
		// 				acc[j].classList.remove("active");
		// 				let otherPanel = acc[j].nextElementSibling;
		// 				otherPanel.style.maxHeight = null;
		// 				acc[j].querySelector('img').src = "./src/images/icons/pluse.svg";
		// 			}
		// 		}

		// 		this.classList.toggle("active");
		// 		let panel = this.nextElementSibling;
		// 		if (panel.style.maxHeight) {
		// 			panel.style.maxHeight = null;
		// 			this.querySelector('img').src = "./src/images/icons/pluse.svg";
		// 		} else {
		// 			panel.style.maxHeight = panel.scrollHeight + "px";
		// 			this.querySelector('img').src = "./src/images/icons/minus.svg";
		// 		}
		// 	});

		let acc = document.querySelectorAll(".accordion");
		for (let i = 0; i < acc.length; i++) {
			let panel = acc[i].nextElementSibling;
			let img = acc[i].querySelector('img');

			acc[i].addEventListener("click", function () {
				for (let j = 0; j < acc.length; j++) {
					if (j !== i) {
						acc[j].classList.remove("active");
						acc[j].nextElementSibling.style.maxHeight = null;
						acc[j].querySelector('img').src = "./src/images/icons/pluse.svg";
					}
				}

				this.classList.toggle("active");

				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
					img.src = "./src/images/icons/pluse.svg";
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
					img.src = "./src/images/icons/minus.svg";
				}
			});
		}
	} catch (error) {
		throw error
	}

	// Modal
	const searchModalClose = document.querySelector('.search-modal__close');
	const searchModal = document.querySelector('.search-modal');
	const searchModalOpen = document.querySelector('#search-modal-open');
	const callModal = document.querySelector('.call-modal');
	const callModalOpen = document.querySelector('.call-modal__open');
	const callModalClose = document.querySelector('.call-modal__close');

	function openModal(modal) {
		modal.classList.remove('hidden');
		modal.classList.add('block');
		document.body.style.overflow = 'hidden';
	}

	function closeModal(modal) {
		modal.classList.remove('block');
		modal.classList.add('hidden');
		document.body.style.overflow = 'auto';
	}

	searchModalOpen.addEventListener('click', () => openModal(searchModal));
	searchModalClose.addEventListener('click', () => closeModal(searchModal));

	callModalOpen.addEventListener('click', () => openModal(callModal));
	callModalClose.addEventListener('click', () => closeModal(callModal));

	document.body.addEventListener('click', (e) => {
		if ((e.target === searchModal || e.target === callModal) && e.target.classList.contains('modal')) {
			closeModal(e.target);
		}
	});

	function show(value, textBox, optionContainer) {
		textBox.value = value;
		optionContainer.classList.add('hidden');
	}

	function initializeDropdown(dropdown) {
		const textBox = dropdown.querySelector('.textBox');
		const options = dropdown.querySelector('.option');
		const optionItems = options.querySelectorAll('.option-item');

		optionItems.forEach((item) => {
			item.addEventListener('click', function () {
				show(item.textContent.trim(), textBox, options);
			});
		});

		textBox.addEventListener('click', function () {
			options.classList.toggle('hidden');
		});

		// Close the dropdown when clicking outside
		document.addEventListener('click', function (e) {
			if (!options.contains(e.target) && e.target !== textBox) {
				options.classList.add('hidden');
			}
		});
	}

	// Initialize each dropdown
	const dropdowns = document.querySelectorAll('.sellect-dropdown');
	dropdowns.forEach(initializeDropdown);
});