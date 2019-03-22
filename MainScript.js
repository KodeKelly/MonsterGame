// JavaScript source code
const monsterDisplay = document.getElementById('displayM');
const feedback = document.getElementById('feedback');


//CHOOSE BUTTON AND DATA

class Monster {
  constructor(name, imageUrl, hp) {
    this.name = name;
    this.imageUrl = imageUrl;
	this.hp = hp;
  }
}

const Troll = new Monster("Troll", "url('TrollPic.jpg')", 30 );




$('.buttonChoose').on('click', () => {
	//monsterDisplay.style.backgroundImage = test;
	monsterDisplay.style.backgroundImage = Troll.imageUrl;
	if(monsterDisplay.style.backgroundImage = Troll.imageUrl){
		feedback.innerHTML = Troll.name;
	}
});





