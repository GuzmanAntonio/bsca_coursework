// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we"ve provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we"ve provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/enemy-bug.png";
};

// Update the enemy"s position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x < 505) {
        this.x += -100;
        this.speed = 100 + Math.floor(Math.random()*256)
    }
 
    // If the enemy and the player collide.
    if(this.x < player.x + 60 && this.x + 37 > player.x && this.y < player.y + 25 && this.y + 30 > player.y) {
        score = 0;
        document.getElementById("userScore").innerHTML = score;
        player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y, speed) {
    this.x = 200;
    this.y = 320;
    this.speed = speed;
    this.sprite = "images/char-horn-girl.png";

};

// Is called every time the player position is updated
Player.prototype.update = function() {
    
    // If the player reaches the water
    if (player.y < 20) {
    score++;
    document.getElementById("userScore").innerHTML = score;
    this.reset();
}
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 320;
};

// Place the player object in a variable called player
var player = new Player();

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if(direction == "right" && this.x > 0) {
        this.x -= 50;
    }
    if(direction == "left" && this.x < 400) {
        this.x += 50;
    }
    if(direction == "down" && this.y > 3) {
        this.y -= 50;
    }
    if(direction == "up" && this.y < 400) {
        this.y += 50;
    }
};

// Now instantiate your objects.
var badGuy1 = new Enemy(-90, 60);
var badGuy2 = new Enemy(-190, 140);
var badGuy3 = new Enemy(-290, 230);
var badGuy4 = new Enemy(-390, 140);
var badGuy5 = new Enemy(-490, 60);
var badGuy6 = new Enemy(-890, 230);

// Place all enemy objects in an array called allEnemies
var allEnemies = [badGuy1, badGuy2, badGuy3, badGuy4, badGuy5, badGuy6];

// Sets an initial player score of 0.
var score = 0;
document.getElementById("userScore").innerHTML = score;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don"t need to modify this.
document.addEventListener("keyup", function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    player.handleInput(allowedKeys[e.keyCode]);
});