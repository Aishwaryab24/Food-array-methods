let foods=require('./food.json');

// list all the food items
console.log(foods);


// list all the food items with category vegetables
let catVegetable=foods.filter((food) =>{
    return food.category === "Vegetable"
});
console.log(catVegetable);


// list all the food items with category fruit
let catFruit=foods.filter((food)=> {
    return food.category === "Fruit"
});
console.log(catFruit);


// list all the food items with category protien
let catProtein=foods.filter((food)=> {
    return food.category === "Protein"
});
console.log(catProtein);


// list all the food items with category nuts
let catNuts=foods.filter((food)=> {
    return food.category === "Nuts"
});
console.log(catNuts);


// list all the food items with category grains
let catGrain=foods.filter((food)=> {
    return food.category === "Grain"
});
console.log(catGrain);


// list all the food items with category dairy
let catDairy=foods.filter((food)=> {
    return food.category === "Dairy"
});
console.log(catDairy);


// list all the food items with calorie above 100
let calorieAbove100=foods.filter((food)=> {
    return food.calorie >100
});
console.log(calorieAbove100);


// list all the food items with calorie below 100
let calorieBelow100=foods.filter((food)=> {
    return food.calorie <100
});
console.log(calorieBelow100);


// list all the food items with highest protien content to lowest
let proteinsort=foods.sort((a, b) => b.protiens - a.protiens);
console.log(proteinsort);


// list all the food items with lowest cab content to highest
let carbsort=foods.sort((a, b) => a.cab - b.cab);
console.log(carbsort);

