$(document).ready(function() {
  var wishList = new WishList();
  initialise();

  $("#add-beach-item").on('click', function(e) {
    e.preventDefault();
    addToBeachList();
  });

  $("#add-food-item").on('click', function(e) {
    e.preventDefault();
    addToFoodList();
  });

  $("#remove-beach-item").on('click', function(e) {
    e.preventDefault();
    deleteFromBeachList();
  });

  $("#remove-food-item").on('click', function(e) {
    e.preventDefault();
    deleteFromFoodList();
  });

  $("#clear-beach-items").on('click', function(e) {
    e.preventDefault();
    clearBeachList();
  });

  $("#clear-food-items").on('click', function(e) {
    e.preventDefault();
    clearFoodList();
  });

  function initialise() {
    displayInializedBeachItems();
    displayInializedFoodItems();
  }

  function displayInializedBeachItems() {
    displayInializedListItems("beach", wishList.getBeachList());
  }

  function displayInializedFoodItems() {
    displayInializedListItems("food", wishList.getFoodList());
  }

  function displayInializedListItems(list, wishList) {
    for (i = 0; i < wishList.length; i++) {
      $("#"+list+"-item").append("<li id=" + wishList[i] + "-"+list+"-item class=" + wishList[i] + "-"+list+"-item>" + wishList[i] + "</li>");
    }
  }

  function addToBeachList() {
    var beachItem = $("#new-beach-item").val();

    if (beachItem != "") {
      wishList.addToBeachList(beachItem);
      addItemToList("beach", beachItem);
      showRemoveClearBeachButtons();
    }
  }

  function addToFoodList() {
    var foodItem = $("#new-food-item").val();

    if (foodItem != "") {
      wishList.addToFoodList(foodItem);
      addItemToList("food", foodItem);
      showRemoveClearFoodButtons();
    }
  }

  function addItemToList(list, wishList) {
    $("#"+list+"-item").append("<li id=" + wishList + "-"+list+"-item class=" + wishList + "-"+list+"-item>" + wishList + "</li>");
    $("#new-"+list+"-item").val("");
    window.alert("You've just added " + wishList + " to the "+list+" list");
  }

  function showRemoveClearBeachButtons() {
    $('#beach-remove-form').show();
    $('#beach-clear-form').show();
  }

  function showRemoveClearFoodButtons() {
    $('#food-remove-form').show();
    $('#food-clear-form').show();
  }

  function deleteFromBeachList() {
    var beachItem = $("#old-beach-item").val();

    if (wishList.isItemInBeachList(beachItem)) {
      wishList.removeFromBeachList(beachItem);
      deleteItemFromList("beach", beachItem);
    }

    hideRemoveClearBeachButtons()
    $("#old-beach-item").val("");
  }

  function deleteFromFoodList() {
    var foodItem = $("#old-food-item").val();

    if (wishList.isItemInFoodList(foodItem)) {
      wishList.removeFromFoodList(foodItem);
      deleteItemFromList("food", foodItem);
    }

    hideRemoveClearFoodButtons()
    $("#old-food-item").val("");
  }

  function deleteItemFromList(list, wishList) {
    $("#" + wishList + "-"+list+"-item").remove();
    window.alert("You've just removed " + wishList + " from the "+list+" list");
  }

  function clearBeachList() {
    var beachItems = wishList.getBeachList();
    clearList("beach", beachItems);
    wishList.clearBeachList();
    hideRemoveClearBeachButtons()
    window.alert("You've just cleared the beach list");
  }

  function clearFoodList() {
    var foodItems = wishList.getFoodList();
    clearList("food", foodItems);
    wishList.clearFoodList();
    hideRemoveClearFoodButtons()
    window.alert("You've just cleared the food list");
  }

  function clearList(list, wishList) {
    for (i = 0; i < wishList.length; i++) {
      $("#" + wishList[i] + "-"+list+"-item").remove();
    }
  }

  function hideRemoveClearBeachButtons() {
    if (wishList.isBeachListEmpty()) {
      $('#beach-remove-form').hide();
      $('#beach-clear-form').hide();
    }
  }

  function hideRemoveClearFoodButtons() {
    if (wishList.isFoodListEmpty()) {
      $('#food-remove-form').hide();
      $('#food-clear-form').hide();
    }
  }
});
