console.log('WishList Spec')

'use strict';
describe('WishList', function(){
  var wishList;

  beforeEach(function() {
    wishList = new WishList();
  });

  it('Wish list has default beach list', function() {
    expect(wishList.getBeachList()).toEqual(["Ball", "Bat", "Bodyboard", "Bucket"]);
  });

  it('Wish list has default food list', function() {
    expect(wishList.getFoodList()).toEqual(["Salami", "Prosciutto", "Ham", "Steak"]);
  });

  describe('Add items to wish lists', function() {
   it('Adds item to beach list', function() {
     wishList.addToBeachList("Sun Glasses");
     newBeachList = ["Ball", "Bat", "Bodyboard", "Bucket", "Sun Glasses"]
     expect(wishList.getBeachList()).toEqual(newBeachList);
   });

   it('Adds item to food list', function() {
     wishList.addToFoodList("Bread");
     newFoodList = ["Salami", "Prosciutto", "Ham", "Steak", "Bread"]
     expect(wishList.getFoodList()).toEqual(newFoodList);
   });
  });

  describe('Removes items from wish lists', function() {
   it('Removes item from beach list', function() {
     wishList.removeFromBeachList("Bat");
     newBeachList = ["Ball", "Bodyboard", "Bucket"]
     expect(wishList.getBeachList()).toEqual(newBeachList);
   });

   it('Removes item from food list', function() {
     wishList.removeFromFoodList("Ham");
     newFoodList = ["Salami", "Prosciutto", "Steak"]
     expect(wishList.getFoodList()).toEqual(newFoodList);
   });
  });

  describe('Clear wish lists', function() {
   it('Clears beach list', function() {
     wishList.clearBeachList();
     expect(wishList.getBeachList()).toEqual([]);
   });

   it('Clears food list', function() {
     wishList.clearFoodList();
     expect(wishList.getFoodList()).toEqual([]);
   });
  });

  describe('Checks if lists are empty', function() {
   it('Is beach list empty', function() {
     expect(wishList.isBeachListEmpty()).toEqual(false);
     wishList.clearBeachList();
     expect(wishList.isBeachListEmpty()).toEqual(true);
   });

   it('Is food list empty', function() {
     expect(wishList.isFoodListEmpty()).toEqual(false);
     wishList.clearFoodList();
     expect(wishList.isFoodListEmpty()).toEqual(true);
   });
  });
});
