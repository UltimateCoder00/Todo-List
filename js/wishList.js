$(document).ready(function() {
  var wishList = new WishList();
  initialise();

  $("#add-beach-item").on('click', function(e){
    e.preventDefault();
    addToBeachList();
  });

  $("#remove-beach-item").on('click', function(e){
    e.preventDefault();
    deleteFromBeachList();
  });

  $("#add-food-item").on('click', function(e){
    e.preventDefault();
    addToFoodList();
  });

  $("#remove-food-item").on('click', function(e){
    e.preventDefault();
    deleteFromFoodList();
  });

  function initialise() {
    displayInializedBeachItems();
    displayInializedFoodItems();

  }

  function displayInializedBeachItems() {
    var beachItems = wishList.getBeachList();
    for (i = 0; i < beachItems.length; i++) {
      $("#beach-item").append("<li id=" + beachItems[i] + "-beach-item class=" + beachItems[i] + "-beach-item>" + beachItems[i] + "</li>");
    }
  }

  function displayInializedFoodItems() {
    var foodItems = wishList.getFoodList()
    for (i = 0; i < foodItems.length; i++) {
      $("#food-item").append("<li id=" + foodItems[i] + "-food-item class=" + foodItems[i] + "-food-item>" + foodItems[i] + "</li>");
    }
  }

  function addToBeachList() {
    var beachItem = $("#new-beach-item").val();

    if (beachItem != "") {
      $("#beach-item").append("<li id=" + beachItem + "-beach-item class=" + beachItem + "-beach-item>" + beachItem + "</li>");
      $("#new-beach-item").val("");
    }
  }

  function addToFoodList() {
    var foodItem = $("#new-food-item").val();

    if (foodItem != "") {
      $("#food-item").append("<li id=" + foodItem + "-food-item class=" + foodItem + "-food-item>" + foodItem + "</li>");
      $("#new-food-item").val("");
    }
  }

  function deleteFromBeachList() {
    var beachItem = $("#old-beach-item").val();
    $("#" + beachItem + "-beach-item").remove();
    $("#old-beach-item").val("");
  }

  function deleteFromFoodList() {
    var foodItem = $("#old-food-item").val();
    $("#" + foodItem + "-food-item").remove();
    $("#old-food-item").val("");
  }
});
