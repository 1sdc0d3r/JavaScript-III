// https://blog.bitsrc.io/understanding-javascripts-prototypal-inheritance-354292253bcb

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Cam",
  team: "Mage Guild",
  weapons: ["Staff of Shama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Will",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Braden",
  team: "Forest Kingdom",
  weapons: ["Long Bow", "Dagger"],
  language: "Elvish"
});

const villain = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 12,
  name: "Matt",
  team: "Prom Crasher",
  weapons: ["Dagger", "Dagger+"],
  language: ["Common Tongue", "Hidden"]
});

// const bestFriend = new Hero({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 2,
//     height: 3
//   },
//   healthPoints: 15,
//   name: "Paulyboy",
//   team: "Say10",
//   weapons: ["Short Sword", "Longbow", "Shield"]
// });

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  console.log(`${this.name} dies slowly...`);
};

function CharacterStats(attributes) {
  this.healthPoints = attributes.healthPoints;
  GameObject.call(this, attributes);
}

CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.constructor = CharacterStats;

CharacterStats.prototype.takeDamage = function() {
  return console.log(`${this.name} took damage!`);
};

function Humanoid(attributes) {
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  CharacterStats.call(this, attributes);
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.constructor = Humanoid;

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

console.log(Humanoid);
console.log(CharacterStats);
console.log(GameObject);
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish

// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(attributes) {
  Humanoid.call(this, attributes);
}
Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.constructor = Hero;

Hero.prototype.removeHp = function() {
  this.healthPoints--;
  return this.healthPoints > 0
    ? console.log(`${this.name} lost health. HP: ${this.healthPoints}`)
    : this.destroy();
};

const bestFriend = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3
  },
  healthPoints: 15,
  name: "Paulyboy",
  team: "Say10",
  weapons: ["Short Sword", "Longbow", "Shield"]
});

//* console.log(`${this.name} was removed from the game in the large pit of Lava from the Manicores' lair`)
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
// console.log(bestFriend.healthPoints);
