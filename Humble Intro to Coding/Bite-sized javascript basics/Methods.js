// Declare Object player with Method play
let player = {
    health: 100,
    fun: 0,
    eatApple: function () {
        console.log("Eat Apple")

        this.health += 10;

        console.log(this.health);
    }
  };

  player.eatApple();