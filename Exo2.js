// Reponse numero 1
let users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  function hasmanyskills() {
      let maxlength = 0; 
      for (let i = 0; i <= users.length; i++) {
      if (users[i].skills.length > maxlength) {
      console.log( users[i]);
    } 
  }
  
  }
  console.log(hasmanyskills());

 
  // Reponse numero 2
function loggedInUsers() {
  let table = []
for (let j = 0; j <= users.length; j++) {
  if (users[j].isLoggedIn === true) {
    table.push(users[j])
     return table.length;
  } 
}
}
console.log(loggedInUsers());


// Reponse numero 3
function whoAreMERNStackDeveloper() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
       return users[i];
    } else {
      console.log("Il n y apas de devellopeur de la pile MERN");
    }
  }
}
console.log(whoAreMERNStackDeveloper());


 // Reponse numero 4
 console.log(users.Mohamed = {email: 'mohamedattahirdiallo@gmail.com',
 skills: ['HTML', 'CSS', 'JavaScript'],
 age: 20,
 isLoggedIn: false,
 points: 40});