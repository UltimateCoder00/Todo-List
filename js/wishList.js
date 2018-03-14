$(document).ready(function() {
  var wishList = new WishList();

  $("#add-beach-item").on('click', function(e){
    e.preventDefault();
    addToBeachList()
  });

  function addToBeachList() {
    var beachItem = $("#new-beach-item").val();

    if (beachItem != "") {
      $("#beach-item").append("<li id=" + beachItem + "'-beach-item' class=" + beachItem + "'-beach-item'>" +
                              beachItem + "  " + "<button class='delete-" + beachItem + "'>"+
                              "Delete " + beachItem + "</button></li>");

     $("#new-beach-item").val("");
   }
  }
});
