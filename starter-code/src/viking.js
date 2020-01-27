// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
       this.health = this.health - damage;
       if (this.health <= 0) {
            return this.name + ' has died in act of combat';
       } return this.name + ' has received ' + damage + ' points of damage';
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
    return "A Saxon has received " + damage + " points of damage";
  }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack(){
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length))];
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length))];
        let damage = saxonSoldier.receiveDamage(vikingSoldier.strength);
        if (saxonSoldier.health <=0) {
            this.saxonArmy.splice(saxonSoldier);
            return damage;
        }  return damage;     
    }
    saxonAttack(){
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let damage = vikingSoldier.receiveDamage(saxonSoldier.strength);
        if (vikingSoldier.health <= 0) {
          this.vikingArmy.splice(vikingSoldier);
          return damage;
        }
        return damage;  
    }
    showStatus(){
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if ((this.saxonArmy.length !== 0) && (this.vikingArmy.length !== 0)) {
            return "Vikings and Saxons are still in the thick of battle.";
        } 
    }
}
