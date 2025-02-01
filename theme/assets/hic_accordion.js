class Accordion {
	constructor(selector) {
		this.accordionItems = document.querySelectorAll(selector);
		this.setupAccordion();
	}

	setupAccordion() {
		this.accordionItems.forEach(item => {
			const header = item.querySelector('.accordion-header');
			header.addEventListener('click', () => this.toggleAccordionItem(item));
			
			if (item.classList.contains('active')) {
				const content = item.querySelector('.accordion-content'),
							height = content.offsetHeight;
				content.style.height = height + 'px';
			}
		});
	}

	toggleAccordionItem(item) {
		item.classList.toggle('active');
		const content = item.querySelector('.accordion-content'),
					height = content.style.height.replace('px', ''),
			scrollHeight = content.scrollHeight;
		const ico = item.querySelector('i');
		content.style.height = height === '0' ? scrollHeight + 'px' : 0;
		ico.innerHTML = ico.innerHTML === '+' ? '-' : '+';

		this.closeOtherAccordionItems(item);
	}

	closeOtherAccordionItems(currentItem) {
		this.accordionItems.forEach(item => {
			if (item !== currentItem && item.classList.contains('active')) {
				item.classList.remove('active');
				item.querySelector('.accordion-content').style.height = 0;
				item.querySelector('i').innerHTML = '+';
			}
		});
	}
}