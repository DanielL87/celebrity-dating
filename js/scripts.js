$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var match = age + 5;

    if (age){
      if (match <= 30 && gender == 'male'){
        $("p").hide();
        $("#celebrity1").show();
      }
      if (match >= 30 && gender == 'male') {
        $("p").hide();
        $("#celebrity2").show();
      }
      if (match <= 30 && gender == 'female') {
        $("p").hide();
        $("#celebrity3").show();
      }
      if (match >= 30 && gender == 'female') {
        $("p").hide();
        $("#celebrity4").show();
      }
    } else {
    alert("Please Enter Age")
    }
  event.preventDefault();
  });
});
