// Challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// are both vegan? only offer vegan dishes
// 1 guest is vegan?  offer both
// else no vegans offer anything on menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('We have the best vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Here are vegan and meat menus');
} else {
  console.log('Choose anything you like');
}

// let temp = 5;

// between 60 - 90 degrees = fine

// logical and operator

// both must be true or it will be false otherwise

// if (temp >= 60 && temp <= 90) {
//   console.log("it's fine weather");
// }

// logical OR operator - true if at least 1 side is true. false otherwise.

// dangerous to go out if temp < than 0 or > 120

// let temp = 155;

// if (temp <= 0 || temp >= 120) {
//   console.log("Don't go outside");
// }
