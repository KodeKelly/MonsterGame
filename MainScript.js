// JavaScript source code
const monsterDisplay = document.getElementById('displayM');
const feedback = document.getElementById('feedback');
const playerLevel = document.getElementById('playerLevel');
const playerLife = document.getElementById('playerLife');
const monsterLevel = document.getElementById('monsterLevel');
const monsterLife = document.getElementById('monsterLife');

let inCombat = false;
let currentMonster;
let monsterCurrentLife;



//DATA

class Player {
    constructor(name, imageUrl, maxlife, level, exp){
        this.name = name;
        this.imageUrl = imageUrl;
        this.maxlife = maxlife;
        this.level = level;
        this.exp = exp;
    }
}

class Monster {
  constructor(name, imageUrl, maxlife, level, exp) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.maxlife = maxlife;
    this.level = level;
    this.exp;
  }
}

const Hero = new Player('Sean', "url('KnightPic.png')", 15, 1, 0);

const Troll = new Monster("Troll", "url('TrollPic.jpg')", 30, 1, 75);
const Goblin = new Monster("Goblin", "url('GoblinPic.gif')", 15, 1, 25);
const Dragon = new Monster("Dragon", "url('DragonPic.png')", 60, 1, 100);
const Skelleton = new Monster("Skelleton", "url('SkelletonPic.jpg')", 60, 1, 50);

const baddies = [Troll, Goblin, Dragon, Skelleton];

playerLevel.innerHTML = Hero.level;
playerLife.innerHTML = Hero.maxlife;



//BUTTON FUNCTIONALITY

$('.buttonChoose').on('click', () => {
    if (inCombat === false) {
        currentMonster = baddies[Math.floor(Math.random() * 4)];
        monsterLevel.innerHTML = currentMonster.level;
        monsterLife.innerHTML = currentMonster.maxlife;
        monsterDisplay.style.backgroundImage = currentMonster.imageUrl;
        monsterCurrentLife = currentMonster.maxlife;
        feedback.innerHTML = currentMonster.name;
    } else {
        feedback.innerHTML = "You are in combat, choose Attack or Run!";
    }
});

$('.buttonAttack').on('click', () => {
    //add code for attacks
    if (currentMonster) {
        inCombat = true;
        attack();
    } else {
        feedback.innerHTML = "You must select a Monster first."
    }
});

$('.buttonRun').on('click', () => {
    //add code for failure chance
    if (inCombat) {
        currentMonster = '';
        monsterLevel.innerHTML = "???";
        monsterLife.innerHTML = "???";
        inCombat = false;
        monsterDisplay.style.backgroundImage = "url('QMark.png')";
        feedback.innerHTML = "You have run away!";
    } else {
        feedback.innerHTML = "Settle down! You have nothing to run from!";
    }
});

//COMBAT FUNCTION

const attack = () => {
    let playerHit = true; // replace with chance to hit function
    if (playerHit) {
        monsterCurrentLife = monsterCurrentLife - 10;
        if (monsterCurrentLife > 0) {
            monsterLife.innerHTML = monsterCurrentLife;
        } else {
            victory();
        }
    } else {
        //what happens when player misses
    }
}

//VICTORY FUNCTION

const victory = () => {
    feedback.innerHTML = "You have slain the " + currentMonster.name;
    currentMonster = "";
    monsterLevel.innerHTML = "???";
    monsterLife.innerHTML = "???";
    monsterDisplay.style.backgroundImage = "url('Loot.png')";
    inCombat = false;
}
    






