// ITERATION 1

// Suspects Array

const suspectsArray = [
  mrGreen={
    
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
   drOrchid={
    
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  profplum={
    
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  missscarlet={
    
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
 mrspeacock={
    
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialite",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  mrMustard={
    
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  }
];

// Rooms Array

const roomsArray = [
  room1={name: "Dining Room" },
    room2={ name: "conservatory" },
    room3={ name: "Kitchen" },
    room4={ name: "Study" },
    room5={ name: "Library" },
    room6={ name: "BilliardRoom" },
    room7={ name: "Lounge" },
    room8={ name: "Ballroom" },
    room9={ name: "Hall" },
    room10={ name: "Spa" },
    room11={ name: "Living Room" },
    room12={ name: "Observatory" },
    room13= { name: "Theater" },
    room14={ name: "Guest House" },
    room15={ name: "Patio" },
];

// Weapons Array

const weaponsArray = [
  arma1={name: "rope", weight: 10  },
    arma2={ name: "knife", weight: 8 },
    arma3={ name: "candlestick", weight: 2 },
    arma4={ name: "dumbbell", weight: 30 },
    arma5={ name: "poison", weight: 2 },
    arma6={ name: "axe", weight: 15 },
    arma7={ name: "bat", weight: 13 },
    arma8={ name: "trophy", weight: 25 },
    arma9={ name: "pistol", weight: 20 },
];

// ITERATION 2

function selectRandom() {
  let randomIndex  
  
let elemento

  if(suspectsArray===0){
  return undefined}
//a partir de aqui dejo de funcionar Jasmin
  else if(randomIndex= math.floor(math.random()*suspectsArray.length)){
  return randomIndex}

  else if (randomIndex= math.floor(math.random()*suspectsArray.length)){
    return randomIndex.firstName
  }
  else if (randomIndex= math.floor(math.random()*suspectsArray.length)){
    elemento=randomIndex.length(math.random())
    return elemento
  }
}

function pickMystery() {
    let sujeto
    let armas
    let habitacion
    leToco={}
if(sujeto=(randomIndex= math.floor(math.random()*suspectsArray.length))){
leToco=pickMystery.push(sujeto)
    return sujeto
}

else if (armas=math.floor(math.random()*weaponsArray.length)){
   leToco=pickMystery.push(armas)
    return armas
    }
else if(habitacion=math.floor(math.random()*roomsArray.length)){
        leToco=pickMystery.push(habitacion)
    return habitacion} 

        return `${sujeto}, ${armas} y ${habitacion} `
       
   }

// ITERATION 3

function revealMystery(leToco) {
    return `${sujeto.firstNamename} ${sujeto.lastNamename} mato al Sr.Boddy usando el  ${armas} en la  ${habitacion} `


}
