$(document).ready(function() {
  $('#ham-menu').sidr();
  $("#ham-menu-close").click(function() {
    $.sidr('close', 'sidr');
    return false;
  });
});
$('.phone-pick input').mask('(999) 999-99-99');