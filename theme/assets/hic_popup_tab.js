class PopupTab extends HTMLElement {
  constructor() {
    super();

    const buttons = this.querySelectorAll('.modal__toggle');
    const modal = this.querySelector('modal');

    buttons.forEach(button => {
      button.addEventListener('click', this.togglePopup.bind(this));
    });

    modal.addEventListener('click', function(e) {
      const parent = this.parentElement;

      parent.removeAttribute('open');
      parent.parentElement.style.removeProperty('overflow');
    });
  }

  togglePopup(event) {
    const action = event.target.ariaLabel

    action == 'Open' ? this.setAttribute('open', '') : this.removeAttribute('open');
    action == 'Open' ? this.parentElement.style.overflow = 'hidden' : this.parentElement.style.removeProperty('overflow');
  }
}

customElements.define('popup-tab', PopupTab);