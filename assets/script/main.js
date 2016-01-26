$(function() {
  var isOpen    = false,
      nav       = $('.nav'),
      container = $('.container'),
      button    = $('#openMenu'),
      body      = $('body');

  function openMenu(e) {
    e.stopPropagation();
    if(!isOpen) {
      nav.addClass('is-open');
      container.addClass('is-open');
      isOpen = true;
    } else {
      closeMenu(e);
    }
  }

  function closeMenu(e) {
    e.stopPropagation();
    nav.removeClass('is-open');
    container.removeClass('is-open');
    isOpen = false;
  }
  button.on('click', openMenu);
  body.on('click', closeMenu);
});
