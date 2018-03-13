'use strict';

function WishList () {
  this.DEFAULT_BEACH_LIST = ["Ball", "Bat", "Bodyboard", "Bucket"];
  this.DEFAULT_FOOD_LIST = ["Salami", "Prosciutto", "Ham", "Steak"];
  this._beachList = this.DEFAULT_BEACH_LIST;
  this._foodList = this.DEFAULT_FOOD_LIST;
}

WishList.prototype.getBeachList = function() {
  return this._beachList;
};

WishList.prototype.getFoodList = function() {
  return this._foodList;
};
