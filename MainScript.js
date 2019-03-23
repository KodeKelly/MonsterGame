// JavaScript source code
const monsterDisplay = document.getElementById('displayM');
const feedback = document.getElementById('feedback');

let inCombat = false;
let currentMonster;


//DATA

class Player {
    constructor(name, imageUrl, hp, level){
        this.name = name;
        this.imageUrl = imageUrl;
        this.hp = hp;
        this.level = level;
    }
}

class Monster {
  constructor(name, imageUrl, hp) {
    this.name = name;
    this.imageUrl = imageUrl;
	this.hp = hp;
  }
}

const Hero = new Player('Sean', "url('KnightPic.png')", 15, 1);

const Troll = new Monster("Troll", "url('TrollPic.jpg')", 30);
const Goblin = new Monster("Goblin", "url('GoblinPic.gif')", 15);
const Dragon = new Monster("Dragon", "url('DragonPic.png')", 60);

const baddies = [Troll, Goblin, Dragon];


//BUTTON FUNCTIONALITY

$('.buttonChoose').on('click', () => {
    if (inCombat === false) {
        currentMonster = baddies[Math.floor(Math.random() * 3)];
        monsterDisplay.style.backgroundImage = currentMonster.imageUrl;
        feedback.innerHTML = currentMonster.name;
    } else {
        feedback.innerHTML = "You are in combat, choose Attack or Run!";
    }
});

$('.buttonAttack').on('click', () => {
    //add code for attacks
    if (currentMonster) {
        inCombat = true;
        feedback.innerHTML = "You have attacked the " + currentMonster.name;
    } else {
        feedback.innerHTML = "You must select a Monster first."
    }
});

$('.buttonRun').on('click', () => {
    //add code for failure chance

    currentMonster = '';
    inCombat = false;
    monsterDisplay.style.backgroundImage = "url('QMark.png')";
    feedback.innerHTML = "You have run away!";
});





