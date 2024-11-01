// Reponse numero 1
const userse = {
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
  let recup = Object.values(userse)
  // console.log(recup);   
  function hasmanyskills() {
    let filtrer = recup.filter((fil) => fil.skills.length > 7)
    return filtrer
}
console.log(hasmanyskills());
  

 
  // Reponse numero 2
function loggedInUsers() {
  let semi = recup.filter((tem) => tem.isLoggedIn === true)
  return semi;
}
console.log(loggedInUsers());


// Reponse numero 3
function whoAreMERNStackDeveloper() {
  let mern = recup.filter((ser) => ser.skills.includes('MongoDB', 'Express', 'React', 'Node'))
  return mern;
}
console.log(whoAreMERNStackDeveloper());


 // Reponse numero 4
 console.log(users.Mohamed = {email: 'mohamedattahirdiallo@gmail.com',
 skills: ['HTML', 'CSS', 'JavaScript'],
 age: 20,
 isLoggedIn: false,
 points: 40});


  // Reponse numero 5
  console.log(Object.keys(users));


  // Reponse numero 6
  console.log(Object.values(users));


   // Reponse numero 7
   const countries = {
    Niger: {
      capital: 'Niamey',
      populations: 25000000,
      languages: ['Haoussa','Zarma','peul (fulfulde)']
    },
    Togo: {
      capital: 'Lomé',
      populations: 9083528,
      languages: ["l'éwé","kabiyè"]
    },
    Mali: {
      capital: 'Bamako',
      populations: 21904983,
      languages: ['Bambara','peul (fulfulde)','dogon (dogo-so,dogo-kan)']
    }, 
    Burkina: {
      capital: 'Ouagadougou',
      populations: 25000000,
      languages: ['le mooré','le fulfuldé (ou peul)','le dioula','le bissa']
    } 
  }
  console.log(countries);