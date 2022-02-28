const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Exercice 1 :  
//1
const players1 = game.players[0];
const players2 = game.players[1];
//2
const gk = players1[0];
const fieldPlayers = players1.slice(1, players1.length);
//3
const allPlayers = players1.concat(players2);
//4
const players1Final = [...players1];
players1Final.push('Thiago', 'Coutinho', 'Perisic');
//5
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
//6
function printGoals(array) {
  const entries = Object.entries(array);
  console.log(`Total de buts : ${array.length} `);
  entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
//7
team1 < team2 ? console.log(`Team1 a le plus de chance de gagner`) : console.log(`Team2 a le plus de chance de gagner`);

//Exercice 2 :
//1
for (let i = 0; i < game.scored.length; i++) {
  console.log(`But ${[i + 1]} : ${game.scored[i]}`);
}
//2
const odd = Object.values(game.odds);
let sum = 0;
for (let i = 0; i < odd.length; i++) {
  sum += odd[i];
}
oddsAverage = (sum / odd.length).toFixed(2);
console.log(oddsAverage);
//3
console.log(`Probabilité de victoire pour le Bayern de Munich : ${team1}`);
console.log(`Probabilité d'égalité : ${draw}`);
console.log(`Probabilité de victoire pour le Borussia Dortmund : ${team2}`);
//4


 