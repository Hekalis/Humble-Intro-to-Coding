// declare the object
let player = {
    name: 'ABC',
    score: 99,
    isActive: true,
    outfitColor: 'blue',
    outfitSize: 'M'
  };

console.log(player.name); // logs ABC
console.log(player['name']); // logs ABC

console.log(player.outfit.color); // logs blue
console.log(player['outfit']['color']); // logs blue
  
// modifying an object property
console.log(player.isActive); // logs true
player.isActive = false;
console.log(player.isActive); // logs false
  
// modifying a nested property
console.log(player.outfit.color); // logs blue
player.outfit.color = 'red';
console.log(player.outfit.color); // logs red

// adding new properties to the object
player.health = 100;
console.log('player object:',player);

// deleting a property
delete player.health;
console.log('player object:',player);