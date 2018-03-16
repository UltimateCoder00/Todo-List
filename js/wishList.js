$(document).ready(function() {
  var wishList = new WishList();
  initialise();

  $("#add-beach-item").on('click', function(e){
    e.preventDefault();
    addToBeachList();
  });

  $("#add-food-item").on('click', function(e){
    e.preventDefault();
    addToFoodList();
  });

  $("#remove-beach-item").on('click', function(e){
    e.preventDefault();
    deleteFromBeachList();
  });

  $("#remove-food-item").on('click', function(e){
    e.preventDefault();
    deleteFromFoodList();
  });

  $("#clear-beach-items").on('click', function(e){
    e.preventDefault();
    clearBeachList();
  });

  $("#clear-food-items").on('click', function(e){
    e.preventDefault();
    clearFoodList();
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
      wishList.addToBeachList(beachItem);
      $("#beach-item").append("<li id=" + beachItem + "-beach-item class=" + beachItem + "-beach-item>" + beachItem + "</li>");
      $("#new-beach-item").val("");
      window.alert("You've just added " + beachItem + " to the beach list");
      $('#beach-remove-form').show();
      $('#beach-clear-form').show();
    }
  }

  function addToFoodList() {
    var foodItem = $("#new-food-item").val();

    if (foodItem != "") {
      wishList.addToFoodList(foodItem);
      $("#food-item").append("<li id=" + foodItem + "-food-item class=" + foodItem + "-food-item>" + foodItem + "</li>");
      $("#new-food-item").val("");
      window.alert("You've just added " + foodItem + " to the food list");
      $('#food-remove-form').show();
      $('#food-clear-form').show();
    }
  }

  function deleteFromBeachList() {
    var beachItem = $("#old-beach-item").val();

    if (wishList.isItemInBeachList(beachItem)) {
      wishList.removeFromBeachList(beachItem);
      $("#" + beachItem + "-beach-item").remove();
      window.alert("You've just removed " + beachItem + " from the beach list");
    }

    if (wishList.isBeachListEmpty()) {
      $('#beach-remove-form').hide();
      $('#beach-clear-form').hide();
    }
    $("#old-beach-item").val("");
  }

  function deleteFromFoodList() {
    var foodItem = $("#old-food-item").val();

    if (wishList.isItemInFoodList(foodItem)) {
      wishList.removeFromFoodList(foodItem);
      $("#" + foodItem + "-food-item").remove();
      window.alert("You've just removed " + foodItem + " from the food list");
    }

    if (wishList.isFoodListEmpty()) {
      $('#food-remove-form').hide();
      $('#food-clear-form').hide();
    }
    $("#old-food-item").val("");
  }

  function clearBeachList() {
    var beachItems = wishList.getBeachList();
    for (i = 0; i < beachItems.length; i++) {
      $("#" + beachItems[i] + "-beach-item").remove();
    }
    wishList.clearBeachList();
    $('#beach-remove-form').hide();
    $('#beach-clear-form').hide();
    window.alert("You've just cleared the beach list");
  }

  function clearFoodList() {
    var foodItems = wishList.getFoodList();
    for (i = 0; i < foodItems.length; i++) {
      $("#" + foodItems[i] + "-food-item").remove();
    }
    wishList.clearFoodList();
    $('#food-remove-form').hide();
    $('#food-clear-form').hide();
    window.alert("You've just cleared the food list");
  }
});
