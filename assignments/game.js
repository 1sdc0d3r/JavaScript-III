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

const hero = new Humanoid({
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

function GameObject(charObj) {
  this.createdAt = charObj.createdAt;
  this.name = charObj.name;
  this.dimensions = charObj.dimensions;
  this.prototype.destroy = function() {
    `${this.name} dies slowly...`;
  };
    // this.prototype.createdAt = charObj.createdAt;
    // this.prototype.dimensions = charObj.dimensions;

}

function CharacterStats(charStats) {
  this.healthPoints = charStats.healthPoints;
  this.takeDamage = function() {
    `${this.name} took damage.`;
  };
  this.destroy() = GameObject.prototype.destroy;
  //   this.prototype.takeDamage = function() {
  //     `${this.name} took damage.`;
  //   };
  // inherit destroy() from GameObject prototype
  // destroy() = this.GameObject.destroy???
}

function Humanoid(humanoidChar) {
  this.team = humanoidChar.team;
  this.weapons = humanoidChar.weapons;
  this.language = humanoidChar.language;

//   this.createdAt = GameObject.prototype.createdAt;
//   this.dimensions = GameObject.prototype.dimensions;

  // this.prototype.greet() = function(){
  //     `${this.name} offers a greeting in ${this.language}`
  //  // inherit destroy() from GameObject through CharStats
  //  // destroy() = this.CharStats.destroy??? proto???
  //  // inherit takeDamage() from CharacterStats
  //  // this.takeDamage() = CharacterStats.proto.takeDamage();???

  // }
}
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
