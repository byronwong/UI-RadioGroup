(function() {
  'use strict';

  // TODO: query selector all
  let test = document.querySelector('.custom-radio-group');

  if (test) {
    console.log('js loaded');

    let nativeRadioGroup = document.querySelector('.native-radio-group');
    let extendedRadioGroup = document.querySelector('.extended-radio-group');
    console.log(nativeRadioGroup);

    nativeRadioGroup.classList.add('hidden');
    extendedRadioGroup.classList.remove('hidden');

    const keyCodes = {
      enter : 13,
      space : 32,
      left : 37,
      up : 38,
      right: 39,
      down: 40
    }






  }

  // // Define values for keycodes
  // var VK_ENTER      = 13;
  // var VK_SPACE      = 32;
  // var VK_LEFT       = 37;
  // var VK_UP         = 38;
  // var VK_RIGHT      = 39;
  // var VK_DOWN       = 40;

  // // Helper function to convert NodeLists to Arrays
  // function slice(nodes) {
  //   return Array.prototype.slice.call(nodes);
  // }

  // // constructor function
  // function RadioGroup(id) {
  //   this.el = document.querySelector(id);
  //   this.buttons = slice(this.el.querySelectorAll('.radio'));
  //   this.focusedIdx = 0;
  //   this.focusedButton = this.buttons[this.focusedIdx];

  //   this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  // }

  // RadioGroup.prototype.handleKeyDown = function(e) {
  //   switch(e.keyCode) {

  //     case VK_UP:
  //     case VK_LEFT: {

  //       e.preventDefault();

  //       if (this.focusedIdx === 0) {
  //         this.focusedIdx = this.buttons.length - 1;
  //       } else {
  //         this.focusedIdx--;
  //       }

  //       break;

  //     }

  //     case VK_DOWN:
  //     case VK_RIGHT: {

  //       e.preventDefault();

  //       if (this.focusedIdx === this.buttons.length - 1) {
  //         this.focusedIdx = 0;
  //       } else {
  //         this.focusedIdx++;
  //       }

  //       break;
  //     }

  //   }

  //   this.changeFocus(this.focusedIdx);
  // };

  // RadioGroup.prototype.changeFocus = function(idx) {
  //   // Set the old button to tabindex -1
  //   this.focusedButton.tabIndex = -1;
  //   this.focusedButton.removeAttribute('checked');

  //   // Set the new button to tabindex 0 and focus it
  //   this.focusedButton = this.buttons[idx];
  //   this.focusedButton.tabIndex = 0;
  //   this.focusedButton.focus();
  //   this.focusedButton.setAttribute('checked', 'checked');
  // };

  // var group1 = new RadioGroup('#group1');
  // console.log(group1);

}());
