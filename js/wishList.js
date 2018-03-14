$(document).ready(function() {
  var wishList = new WishList();

  $("#add-beach-item").on('click', function(e){
    e.preventDefault();
    addToBeachList();
  });

  $("#remove-beach-item").on('click', function(e){
    e.preventDefault();
    deleteFromBeachList();
  });

  function addToBeachList() {
    var beachItem = $("#new-beach-item").val();

    if (beachItem != "") {
      $("#beach-item").append("<li id=" + beachItem + "-beach-item class=" + beachItem + "-beach-item>" + beachItem + "</li>");
      $("#new-beach-item").val("");
    }
  }

  function deleteFromBeachList() {
    var beachItem = $("#old-beach-item").val();
    $("#" + beachItem + "-beach-item").remove();
    $("#old-beach-item").val("");
  }
});
