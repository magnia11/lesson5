'use strict';

var btn = document.querySelector('.btn');
var modal = document.querySelector('.modal');

btn.addEventListener('click', function() {
  modal.classList.toggle('open');
});