// JavaScript source code
const monsterDisplay = document.getElementById('displayM');
const feedback = document.getElementById('feedback');


//DATA

class Monster {
  constructor(name, imageUrl, hp) {
    this.name = name;
    this.imageUrl = imageUrl;
	this.hp = hp;
  }
}

const Troll = new Monster("Troll", "url('TrollPic.jpg')", 30);
const Goblin = new Moster("Goblin", "url('GoblinPic.gif')", 15);


//BOTTON FUNCTIONALITY

$('.buttonChoose').on('click', () => {
	//add code for random monster generator
	monsterDisplay.style.backgroundImage = Troll.imageUrl;
	if(monsterDisplay.style.backgroundImage = Troll.imageUrl){
		feedback.innerHTML = Troll.name;
	}
});

$('.buttonAttack').on('click', () => {
    //add code for attacks
    feedback.innerHTML = "You have attacked the " + Troll.name;
    
});

$('.buttonRun').on('click', () => {
    //add code for failure chance
    feedback.innerHTML = "You have run away!";
});





