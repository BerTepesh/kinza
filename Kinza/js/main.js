$(document).ready(function() {
  $('#ham-menu').sidr();
  $("#ham-menu-close").click(function() {
    $.sidr('close', 'sidr');
    return false;
  });
});