var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var count = 0;
// Write a while loop that prints out the contents of ingredients:
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = ingredients.length-1; i > -1; i--) {
  console.log(ingredients[i]);
}
