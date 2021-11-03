function enterkey() {
    document.querySelectorAll('div.gui-text')[0].addEventListener('keydown', function (event)
  {
      // if the keyCode is 32 ( space key was pressed )
      if (event.keyCode === 32) {
          // prevent default behaviour
          event.preventDefault();
          return false;
      }
  });
    }

document.addEventListener("DOMContentLoaded", enterkey);  //calls function when loaded