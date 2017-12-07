let arrayTest = [
  {date: '11/12/2017',
  temperature: 2.97,
  weather: { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
  },
  { date: '11/12/2017',
  temperature: 2.69,
  weather: { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }
  },
  { date: '12/12/2017',
  temperature: 2.53,
  weather: { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }
  },
  { date: '12/12/2017',
  temperature: 6.53,
  weather: { id: 807, main: 'Clouds', description: 'broken clouds', icon: '04d' }
  }
];


function filterOneDay(acc, current){
  return [acc, current.date];
  // if(acc.find((element) => element[acc].date === current[acc].date)){
  //   return acc;
  // } else {
  //   const newArray = acc.push(current);
  //   console.log(newArray);
  //   return newArray;
  // }
}

arrayTest.reduce(filterOneDay, []);

var amis = [
  { "nom": "Quentin", "livres": ["City Hall", "Harry Potter"]},
  { "nom": "Alice", "livres": ["L'Avare", "Les Fleurs du Mal"]}
]

var tousLivres = amis.reduce(function(prev, curr) {
  return [...prev, ...curr.livres];
}, ["Perceval"]);

// tousLivres = ["Perceval", "City Hall", "Harry Potter",
//               "L'Avare", "Les Fleurs du Mal"]
