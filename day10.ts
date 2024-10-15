class Player {
  name: string;
  health: number = 100;
  power: number = 100;

  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  damage = (power: number) => {
    this.health -= power;
    if (this.health < 0) {
      this.health = 0;
    }
  };
  useItem = (item: { health: number; power: number }) => {
    this.health += item.health;
    this.power = 10 + item.power;
  };
  showStatus = () => {
    return `Player ${this.name} (Health : ${this.health} => Power: ${this.power})`;
  };
}
class ShootingGames {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItems = () => {
    let item = {
      health: Math.floor(Math.random() * 10),
      power: Math.floor(Math.random() * 10),
    };
    return item;
  };

  start = () => {
    console.log(this.player1.showStatus());
    console.log(this.player2.showStatus());

    while (this.player1.health > 0 || this.player2.health > 0) {
      this.player1.useItem(this.getRandomItems());
      this.player2.useItem(this.getRandomItems());

      const turn = Math.floor(Math.random() * 2 + 1);
      if (turn === 1) {
        this.player1.damage(this.player2.power);
      } else {
        this.player2.damage(this.player1.power);
      }

      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      if (this.player1.health <= 0 || this.player2.health <= 0) {
        break;
      }
    }
    if (this.player1.health > this.player2.health) {
      return 'player 1 win';
    } else {
      return 'player 2 win';
    }
  };
}

const player1 = new Player('a');
const player2 = new Player('b');
console.log(player1);

console.log(player2.showStatus());
console.log(player1.showStatus());

const newGame = new ShootingGames(player1, player2);
console.log(newGame.start());
