# Wish List
### Contents
- [Summary](#summary)
- [Description](#description)
- [Future Extensions](#future_extensions)
- [Program](#program)
- [Test Driven Development (TDD) With Jasmine](#tdd)

### <a name="summary">Summary</a>
A javascript/jQuery application for creating a todo list.

### <a name="description">Description</a>
- Create an app that enables the user to create and manage a todo list of items. Use the following categories:

```
Beach items:
- Ball
- Bat
- Bodyboard
- Bucket

Food items:
- Salami
- Prosciutto
- Ham
- Steak
```

- Enable the user to add a combination of these items to their todo list without creating a user account.
- Enable the user to manage the items on their todo list (remove, clear todo list etc.).

### <a name="future_extensions">Future Extensions</a> ###

* Enable the user to drag and drop items into their todo list
* Ensure the todo list remains saved if the user closes the tab and then navigates back to it
* Style the front end

### <a name="program">Program</a>
To use the program open:
```
index.html
```

### <a name="tdd">Test Driven Development (TDD) With Jasmine</a>
This program was developed using jasmine. To run the tests open:
```
SpecRunner.html
```
This will return the following output:
```
12 specs, 0 failures finished in 0.008s
WishList
  Wish list has default beach list
  Wish list has default food list

Add items to wish lists
  Adds item to beach list
  Adds item to food list

Removes items from wish lists
  Removes item from beach list
  Removes item from food list

Clear wish lists
  Clears beach list
  Clears food list

Checks if item is in lists
  Is item in beach list
  Is item in food list

Checks if lists are empty
  Is beach list empty
  Is food list empty
```
