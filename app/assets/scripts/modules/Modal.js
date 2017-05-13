import $ from 'jquery'

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
    }

    events() {
      // user clicked open modal button
      this.openModalButton.click(this.openModal.bind(this));
      // user clicked close modal button
      this.closeModalButton.click(this.closeModal.bind(this));
      // user pressed any key
      $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler() {
      this.closeModal();
    }

    openModal() {
      this.modal.addClass('modal--is-visible');
      return false;
    }

    closeModal() {
      this.modal.removeClass('modal--is-visible');
    }

}

export default Modal;
