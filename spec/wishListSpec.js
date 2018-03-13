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

  describe('Clear wish lists', function() {
   it('Clears beach list', function() {
     wishList.clearBeachList();
     expect(wishList.getBeachList()).toEqual([]);
   });

   it('Clears beach list', function() {
     wishList.clearFoodList();
     expect(wishList.getFoodList()).toEqual([]);
   });
 });
});
