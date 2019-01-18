$(document).ready(function() {
  $("#love").submit (function(event) {

    var food = parseInt($("#food").val());
    var fun = parseInt($("#fun").val());
    var color = parseInt($("#color").val());
    var result = food + fun + color ;

    if (result < 5) {
      $('#match1').show();
      $('#match2').hide();
      $('#match3').hide();
    } else if (result > 4 && result < 8) {
      $('#match2').show();
      $('#match1').hide();
      $('#match3').hide();
    } else {
      $('#match3').show();
      $('#match1').hide();
      $('#match2').hide();
    }
    event.preventDefault();

      $("#food").val("");
      $("#fun").val("");
      $("#color").val("");

});




});
