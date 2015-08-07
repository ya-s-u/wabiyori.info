$( function() {
  /* Init */
  $("#main").hide();

  // segue
  $("#hello").click(function () {
    $("#hello").hide();
    $("#main").show();
  });

  //accordion
  $("#acMenu dt").on("click", function() {
      $(this).next().slideToggle();
  });
});
